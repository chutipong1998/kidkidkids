import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Knowledge {
  id: string,
  name: string,
  alphabet: string,
  thai_sound: string,
  english_sound: string
}

export interface Listen {
  id: string,
  name_state: string,
  state: string,
  category: string
  alphabet: string,
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
  score_state7: number,
  score_state8: number,
  score_state9: number,
  score_state10: number,
  total_score: number
}
  
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  knowledges = new BehaviorSubject([]);
  products = new BehaviorSubject([]);

  lisanimal = new BehaviorSubject([]);

  data = new BehaviorSubject([]);


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
          
          this.loadEnglishAlphabets();
          this.loadLisanimals();
          this.loadData();
          this.loadThaiAlphabets();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getKnw(): Observable<Knowledge[]> {
    return this.knowledges.asObservable();
  }

  getLisAnimal(): Observable<Listen[]> {
    return this.lisanimal.asObservable();
  }

  getData(): Observable<Data[]> {
    return this.data.asObservable();
  }
 
  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }

  // แบบความรู้
  loadEnglishAlphabets() {
    return this.database.executeSql('SELECT * FROM ENGLISH_ALPHABET', []).then(data => {
      let alphabets: Knowledge[] = [];
      
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          // console.log('data =', data.rows.item(i).alphabet);
          // let skills = [];
          // if (data.rows.item(i).alphabet != '') {
          //   skills = JSON.parse(data.rows.item(i).alphabet);
          // }
          // console.log('skills =', skills);
          
          alphabets.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            alphabet: data.rows.item(i).alphabet, 
            thai_sound: data.rows.item(i).sound,
            english_sound: data.rows.item(i).sound
          });
        }
      }
      this.knowledges.next(alphabets);
      // console.log('developers =', developers);
      
    });
  }

  loadThaiAlphabets() {
    return this.database.executeSql('SELECT * FROM THAI_ALPHABET', []).then(data => {
      let alphabets: Knowledge[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          alphabets.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            alphabet: data.rows.item(i).alphabet, 
            thai_sound: data.rows.item(i).sound,
            english_sound: data.rows.item(i).sound
          });
        }
      }
      this.knowledges.next(alphabets);
    });
  }

  loadNumber() {
    return this.database.executeSql('SELECT * FROM NUMBER', []).then(data => {
      let alphabets: Knowledge[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          alphabets.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            alphabet: data.rows.item(i).alphabet, 
            thai_sound: data.rows.item(i).sound,
            english_sound: data.rows.item(i).sound
          });
        }
      }
      this.knowledges.next(alphabets);
    });
  }

  loadAnimal() {
    return this.database.executeSql('SELECT * FROM ANIMAL', []).then(data => {
      let alphabets: Knowledge[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          alphabets.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            alphabet: data.rows.item(i).alphabet, 
            thai_sound: data.rows.item(i).sound,
            english_sound: data.rows.item(i).sound
          });
        }
      }
      this.knowledges.next(alphabets);
    });
  }

  loadFruit() {
    return this.database.executeSql('SELECT * FROM FRUIT', []).then(data => {
      let alphabets: Knowledge[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          alphabets.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            alphabet: data.rows.item(i).alphabet, 
            thai_sound: data.rows.item(i).sound,
            english_sound: data.rows.item(i).sound
          });
        }
      }
      this.knowledges.next(alphabets);
    });
  }

  loadVehicle() {
    return this.database.executeSql('SELECT * FROM VEHICLE', []).then(data => {
      let alphabets: Knowledge[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          alphabets.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            alphabet: data.rows.item(i).alphabet, 
            thai_sound: data.rows.item(i).sound,
            english_sound: data.rows.item(i).sound
          });
        }
      }
      this.knowledges.next(alphabets);
    });
  }

  // แบบทดสอบ
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
            score_state7: data.rows.item(i).score_state7,
            score_state8: data.rows.item(i).score_state8,
            score_state9: data.rows.item(i).score_state9,
            score_state10: data.rows.item(i).score_state10,
            total_score: data.rows.item(i).total_score
          });
        }
      }
      this.data.next(datas);
    });
  }

  updateData(id, scoreState, score) {
    // let data = [datas.score_state1];
    return this.database.executeSql(`UPDATE DATA SET ${scoreState} = ? WHERE id = ${id}`, score).then(data => {
      this.loadData();
    })
  }

  // addDeveloper(id, name, alphabet, sound) {
  //   let data = [id, name, JSON.stringify(alphabet), sound];
  //   return this.database.executeSql('INSERT INTO ENGLISH_ALPHABET (id, name, alphabet, sound) VALUES (?, ?, ?, ?)', data).then(data => {
  //     this.loadEnglishAlphabets();
  //   });
  // }
 
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
 
  // deleteDeveloper(id) {
  //   return this.database.executeSql('DELETE FROM ENGLISH_ALPHABET WHERE id = ?', [id]).then(_ => {
  //     this.loadEnglishAlphabets();
  //     // this.loadProducts();
  //   });
  // }
 
  // updateDeveloper(dev: Alphabet) {
  //   let data = [JSON.stringify(dev.alphabet)];
  //   return this.database.executeSql(`UPDATE ENGLISH_ALPHABET SET id = ?, name = ?, alphabet = ?, sound = ? WHERE id = ${dev.id}`, data).then(data => {
  //     this.loadEnglishAlphabets();
  //   })
  // }
 
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
