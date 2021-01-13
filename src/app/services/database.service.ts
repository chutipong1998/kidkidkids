import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Dev {
  id: string,
  name: string,
  alphabet: string,
  sound: string
}
  
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
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
          
          this.loadDevelopers();
          // this.loadProducts();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getDevs(): Observable<Dev[]> {
    return this.developers.asObservable();
  }
 
  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }

  loadDevelopers() {
    return this.database.executeSql('SELECT * FROM ENGLISH_ALPHABET', []).then(data => {
      let developers: Dev[] = [];

      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          // console.log('data =', data.rows.item(i).alphabet);
          // let skills = [];
          // if (data.rows.item(i).alphabet != '') {
          //   skills = JSON.parse(data.rows.item(i).alphabet);
          // }
          // console.log('skills =', skills);
          
 
          developers.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            alphabet: data.rows.item(i).alphabet, 
            sound: data.rows.item(i).sound
          });
        }
      }
      this.developers.next(developers);
      // console.log('developers =', developers);
      
    });
  }

  addDeveloper(id, name, alphabet, sound) {
    let data = [id, name, JSON.stringify(alphabet), sound];
    return this.database.executeSql('INSERT INTO ENGLISH_ALPHABET (id, name, alphabet, sound) VALUES (?, ?, ?, ?)', data).then(data => {
      this.loadDevelopers();
    });
  }
 
  // getDeveloper(id): Promise<Dev> {
  //   return this.database.executeSql('SELECT * FROM ENGLISH_ALPHABET WHERE id = ?', [id]).then(data => {
  //     let skills = [];
  //     if (data.rows.item(0).alphabet != '') {
  //       skills = JSON.parse(data.rows.item(0).alphabet);
  //     }
 
  //     return {
  //       id: data.rows.item(0).id,
  //       name: data.rows.item(0).name, 
  //       alphabet: skills, 
  //       sound: data.rows.item(0).sound
  //     }
  //   });
  // }
 
  deleteDeveloper(id) {
    return this.database.executeSql('DELETE FROM ENGLISH_ALPHABET WHERE id = ?', [id]).then(_ => {
      this.loadDevelopers();
      // this.loadProducts();
    });
  }
 
  updateDeveloper(dev: Dev) {
    let data = [dev.name, JSON.stringify(dev.alphabet), dev.sound];
    return this.database.executeSql(`UPDATE ENGLISH_ALPHABET SET id = ?, name = ?, alphabet = ?, sound = ? WHERE id = ${dev.id}`, data).then(data => {
      this.loadDevelopers();
    })
  }
 
  // loadProducts() {
  //   let query = 'SELECT product.name, product.id, developer.name AS creator FROM product JOIN developer ON developer.id = product.creatorId';
  //   return this.database.executeSql(query, []).then(data => {
  //     let products = [];
  //     if (data.rows.length > 0) {
  //       for (var i = 0; i < data.rows.length; i++) {
  //         products.push({ 
  //           name: data.rows.item(i).name,
  //           id: data.rows.item(i).id,
  //           creator: data.rows.item(i).creator,
  //          });
  //       }
  //     }
  //     this.products.next(products);
  //   });
  // }
 
  // addProduct(name, creator) {
  //   let data = [name, creator];
  //   return this.database.executeSql('INSERT INTO product (name, creatorId) VALUES (?, ?)', data).then(data => {
  //     this.loadProducts();
  //   });
  // }
}
