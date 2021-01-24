import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  storageDirectory: any;

  fileDir = this.file.externalApplicationStorageDirectory; 
  filename = "result.json";

  data: any;

  jsonString = JSON.stringify(
    [
      {
          "id": 1,
          "name_state": "ลากวาง",
          "category": [
              {
                  "id": 1,
                  "name": "สัตว์",
                  "score_state1": 0,
                  "score_state2": 0,
                  "score_state3": 0,
                  "score_state4": 0,
                  "score_state5": 0,
                  "score_state6": 0,
                  "score_state7": 0,
                  "score_state8": 0,
                  "score_state9": 0,
                  "score_state10": 0,
                  "total_score": 0
              },
              {
                  "id": 2,
                  "name": "ตัวเลข",
                  "score_state1": 0,
                  "score_state2": 0,
                  "score_state3": 0,
                  "score_state4": 0,
                  "score_state5": 0,
                  "score_state6": 0,
                  "score_state7": 0,
                  "score_state8": 0,
                  "score_state9": 0,
                  "score_state10": 0,
                  "total_score": 0
              },
              {
                  "id": 3,
                  "name": "ผลไม้",
                  "score_state1": 0,
                  "score_state2": 0,
                  "score_state3": 0,
                  "score_state4": 0,
                  "score_state5": 0,
                  "score_state6": 0,
                  "score_state7": 0,
                  "score_state8": 0,
                  "score_state9": 0,
                  "score_state10": 0,
                  "total_score": 0
              }
          ]
      },
      {
          "id": 2,
          "name_state": "ฟังเสียงเพื่อตอบคำถาม",
          "category": [
              {
                  "id": 1,
                  "name": "สัตว์",
                  "score_state1": 0,
                  "score_state2": 0,
                  "score_state3": 0,
                  "score_state4": 0,
                  "score_state5": 0,
                  "score_state6": 0,
                  "score_state7": 0,
                  "score_state8": 0,
                  "score_state9": 0,
                  "score_state10": 0,
                  "total_score": 0
              },
              {
                  "id": 2,
                  "name": "ตัวอักษรภาษาไทย",
                  "score_state1": 0,
                  "score_state2": 0,
                  "score_state3": 0,
                  "score_state4": 0,
                  "score_state5": 0,
                  "score_state6": 0,
                  "score_state7": 0,
                  "score_state8": 0,
                  "score_state9": 0,
                  "score_state10": 0,
                  "total_score": 0
              },
              {
                  "id": 3,
                  "name": "ผลไม้",
                  "score_state1": 0,
                  "score_state2": 0,
                  "score_state3": 0,
                  "score_state4": 0,
                  "score_state5": 0,
                  "score_state6": 0,
                  "score_state7": 0,
                  "score_state8": 0,
                  "score_state9": 0,
                  "score_state10": 0,
                  "total_score": 0
              }
          ]
      },
      {
          "id": 3,
          "name_state": "เรียงลำดับตัวเลข",
          "score_state1": 0,
          "score_state2": 0,
          "score_state3": 0,
          "score_state4": 0,
          "score_state5": 0,
          "score_state6": 0,
          "score_state7": 0,
          "score_state8": 0,
          "score_state9": 0,
          "score_state10": 0,
          "total_score": 0
      },
      {
          "id": 4,
          "name_state": "จับคู่เสียงของสัตว์",
          "score_state1": 0,
          "score_state2": 0,
          "score_state3": 0,
          "score_state4": 0,
          "score_state5": 0,
          "score_state6": 0,
          "score_state7": 0,
          "score_state8": 0,
          "score_state9": 0,
          "score_state10": 0,
          "total_score": 0
      }
    ]
  );

  constructor(private file: File) { }

  writeJson(): Promise<any> {
    return this.file.writeFile(this.fileDir, this.filename, this.jsonString, {replace: true});
  }

  readJson(): Promise<any> {
    return this.file.readAsText(this.fileDir, this.filename);
    // return this.file.readAsText(this.fileDir, this.filename).then(fileStr => {
    //   this.data = JSON.parse(String(fileStr));
    //   // alert(this.x.ID)
    //   console.log('file1',this.data);
    //   // this.setData(this.x);
    // }).catch(err => {
    //   console.log('it messed up wow');
    //   console.log(err);
    // });
    // return this.data
  }

  updateJson(fileDir, filename, jsonString): Promise<any> {
    return this.file.writeFile(fileDir, filename, jsonString, {replace: true});
  }
}
