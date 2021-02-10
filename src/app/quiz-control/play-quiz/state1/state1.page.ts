import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DragulaService } from 'ng2-dragula';
import { DatabaseKnowledgeService } from 'src/app/services/database/knowledge/database-knowledge.service';
import { DatabaseQuizService } from 'src/app/services/database/Quiz/database-quiz.service';

@Component({
  selector: 'app-state1',
  templateUrl: './state1.page.html',
  styleUrls: ['./state1.page.scss'],
})
export class State1Page implements OnInit {

  q1 = [
    { value: 'Buy Milk', color: 'primary' },
    { value: 'Write new Post', color: 'primary' }
  ];
  q2 = [
    { value: 'Schedule newsletter', color: 'secondary' },
    { value: 'Find new Ionic Academy topics', color: 'secondary' }
  ];
  q3 = [
    { value: 'Improve page performance', color: 'tertiary' },
    { value: 'Clean the house', color: 'tertiary' }
  ];
  q4 = [
    { value: 'Unimportant things', color: 'warning' },
    { value: 'Watch Netflix', color: 'warning' }
  ];

  img1 = [
    { img: '../../../../assets/img/animal/elephant.png'},
  ];
  img2 = [
    { img: '../../../../assets/img/animal/giraffe.png'},
  ];
  img3 = [
    { img: '../../../../assets/img/animal/dog.png'},
  ];
  img4 = [
    { img: '../../../../assets/img/animal/bird.png'},
  ];
  img5 = [
    { img: '../../../../assets/img/animal/Picture5.png'},
  ];
 
  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';

  score: number;
  dataScore: any = [];

  state: string;

  constructor(private dragulaService: DragulaService, private toastController: ToastController, private db: DatabaseQuizService) {
    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      el.setAttribute('color', 'danger');
    });
 
    this.dragulaService.removeModel('bag')
    .subscribe(({ item }) => {
      this.toastController.create({
        message: 'Removed: ' + item.value,
        duration: 2000
      }).then(toast => toast.present());
    });
 
    this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        item['color'] = 'success';
      });
 
    this.dragulaService.createGroup('bag', {
      removeOnSpill: true
    });
  }

  ngOnInit() {
    this.state = localStorage.getItem('state');
    console.log('state =', this.state);

    this.dataScore = JSON.parse(localStorage.getItem('score'));
    console.log('datasc =', this.dataScore);

    this.chkScore(this.state, this.dataScore)

    // this.db.getDatabaseState().subscribe(ready => {
    //   if(ready) {
    //     this.getScore(this.quiz, this.category);
    //   }
    // });
  }

  addTodo() {
    switch (this.selectedQuadrant) {
      case 'q1':
        this.todo.color = 'primary';
        break;
      case 'q2':
        this.todo.color = 'secondary';
        break;
      case 'q3':
        this.todo.color = 'tertiary';
        break;
      case 'q4':
        this.todo.color = 'warning';
        break;
    }
    this[this.selectedQuadrant].push(this.todo);
    this.todo = { value: '', color: '' };
  }

  chkScore(state: string, datascore: any) {
    for (let i = 0; i < datascore.length; i++) {
      if (state == '1') {
        this.score = datascore[i].score_state1
      } else if (state == '2') {
        this.score = datascore[i].score_state2
      } else if (state == '3') {
        this.score = datascore[i].score_state3
      } else if (state == '4') {
        this.score = datascore[i].score_state4
      } else if (state == '5') {
        this.score = datascore[i].score_state5
      } else if (state == '6') {
        this.score = datascore[i].score_state6
      }
    }
  }

}
