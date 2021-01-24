import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Listen {
  id: string,
  name_state: string,
  state: string,
  category: string
  alphabet: string,
  answer: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseQuizService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  lisanimal = new BehaviorSubject([]);

  constructor(
    private plt: Platform,
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private http: HttpClient
  ) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }

  seedDatabase() {
    this.http.get('assets/data/data.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          
          this.loadLisanimals();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getLisAnimal(): Observable<Listen[]> {
    return this.lisanimal.asObservable();
  }

  loadLisanimals() {
    return this.database.executeSql('SELECT * FROM LISTENANIMAL', []).then(data => {
      let lisanimals: Listen[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          
 
          lisanimals.push({ 
            id: data.rows.item(i).id,
            name_state: data.rows.item(i).name_state,
            state: data.rows.item(i).state,
            category: data.rows.item(i).category,
            alphabet: data.rows.item(i).alphabet, 
            answer: data.rows.item(i).answer
          });
        }
      }
      this.lisanimal.next(lisanimals);
      
    });
  }
}
