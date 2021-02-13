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

export interface Dragdrop {
  id: string,
  name_state: string,
  state: string,
  category: string
  alphabet: string,
  shadow_image: string,
  answer: string
}

export interface Data {
  id: string,
  name_state: string,
  category: string
  score_state1: number,
  score_state2: number,
  score_state3: number,
  score_state4: number,
  score_state5: number,
  score_state6: number,
  total_score: number
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseQuizService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  lisanimal = new BehaviorSubject([]);
  listhaiAlp = new BehaviorSubject([]);
  lisfruit = new BehaviorSubject([]);
  draganimal = new BehaviorSubject([]);
  dragfruit = new BehaviorSubject([]);
  dragnumber = new BehaviorSubject([]);
  data = new BehaviorSubject([]);

  constructor(
    private plt: Platform,
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private http: HttpClient
  ) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'data.db',
        // location: 'default'
        location: 'storage/emulated/0/Android/data/io.ionic.starter/databases/data.db'
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
          
          // ฟังเสียงเพื่อตอบคำถาม
          this.loadLisanimals();
          this.loadListThaiAlps();
          this.loadListFruits();
          // ลากวาง
          this.loadDragDropAnimal();
          this.loadDragDropFruit();
          this.loadDragDropNumber();
          this.dbReady.next(true);
          // ส่วนเก็บคะแนน
          this.loadData();
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

  getLisThaiAlp(): Observable<Listen[]> {
    return this.listhaiAlp.asObservable();
  }

  getLisFruit(): Observable<Listen[]> {
    return this.lisfruit.asObservable();
  }

  getDragAnimal(): Observable<Dragdrop[]> {
    return this.draganimal.asObservable();
  }

  getDragFruit(): Observable<Dragdrop[]> {
    return this.dragfruit.asObservable();
  }

  getDragNumber(): Observable<Dragdrop[]> {
    return this.dragnumber.asObservable();
  }

  getData(): Observable<Data[]> {
    return this.data.asObservable();
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

  loadListThaiAlps() {
    return this.database.executeSql('SELECT * FROM LISTENTHAIALPHABET', []).then(data => {
      let listhaiAlps: Listen[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          
          listhaiAlps.push({ 
            id: data.rows.item(i).id,
            name_state: data.rows.item(i).name_state,
            state: data.rows.item(i).state,
            category: data.rows.item(i).category,
            alphabet: data.rows.item(i).alphabet, 
            answer: data.rows.item(i).answer
          });
        }
      }
      this.listhaiAlp.next(listhaiAlps);
    });
  }

  loadListFruits() {
    return this.database.executeSql('SELECT * FROM LISTENFRUIT', []).then(data => {
      let lisfruits: Listen[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          
          lisfruits.push({ 
            id: data.rows.item(i).id,
            name_state: data.rows.item(i).name_state,
            state: data.rows.item(i).state,
            category: data.rows.item(i).category,
            alphabet: data.rows.item(i).alphabet, 
            answer: data.rows.item(i).answer
          });
        }
      }
      this.lisfruit.next(lisfruits);
    });
  }

  loadDragDropAnimal() {
    return this.database.executeSql('SELECT * FROM DRAGDROPANIMAL', []).then(data => {
      let draganimal: Dragdrop[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          
          draganimal.push({ 
            id: data.rows.item(i).id,
            name_state: data.rows.item(i).name_state,
            state: data.rows.item(i).state,
            category: data.rows.item(i).category,
            alphabet: data.rows.item(i).alphabet, 
            shadow_image: data.rows.item(i).shadow_image,
            answer: data.rows.item(i).answer
          });
        }
      }
      this.draganimal.next(draganimal);
    });
  }

  loadDragDropFruit() {
    return this.database.executeSql('SELECT * FROM DRAGDROPFRUIT', []).then(data => {
      let dragfruit: Dragdrop[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          
          dragfruit.push({ 
            id: data.rows.item(i).id,
            name_state: data.rows.item(i).name_state,
            state: data.rows.item(i).state,
            category: data.rows.item(i).category,
            alphabet: data.rows.item(i).alphabet, 
            shadow_image: data.rows.item(i).shadow_image,
            answer: data.rows.item(i).answer
          });
        }
      }
      this.dragfruit.next(dragfruit);
    });
  }

  loadDragDropNumber() {
    return this.database.executeSql('SELECT * FROM DRAGDROPNUMBER', []).then(data => {
      let dragnumber: Dragdrop[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          
          dragnumber.push({ 
            id: data.rows.item(i).id,
            name_state: data.rows.item(i).name_state,
            state: data.rows.item(i).state,
            category: data.rows.item(i).category,
            alphabet: data.rows.item(i).alphabet, 
            shadow_image: data.rows.item(i).shadow_image,
            answer: data.rows.item(i).answer
          });
        }
      }
      this.dragnumber.next(dragnumber);
    });
  }

  // ส่วนเก็บคะแนน
  loadData() {
    return this.database.executeSql('SELECT * FROM DATA', []).then(data => {
      let datas: Data[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
 
          datas.push({ 
            id: data.rows.item(i).id,
            name_state: data.rows.item(i).name_state,
            category: data.rows.item(i).category,
            score_state1: data.rows.item(i).score_state1,
            score_state2: data.rows.item(i).score_state2,
            score_state3: data.rows.item(i).score_state3,
            score_state4: data.rows.item(i).score_state4,
            score_state5: data.rows.item(i).score_state5,
            score_state6: data.rows.item(i).score_state6,
            total_score: data.rows.item(i).total_score
          });
        }
      }
      this.data.next(datas);
    });
  }

  updateData(id, state, score, total) {
    let data = [score, total];
    return this.database.executeSql(`UPDATE DATA SET ${state} = ?, total_score = ? WHERE id = ${id}`, data).then(data => {
      this.loadData();
    })
  }
}
