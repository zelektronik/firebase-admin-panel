import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firebase-config',
  templateUrl: './firebase-config.component.html',
  styleUrls: ['./firebase-config.component.css']
})
export class FirebaseConfigComponent implements OnInit {

  model: any = {};
  inputType = 'fromJson';
  modelStr: any;
  constructor() {
  }
  ngOnInit(): void {
  }
  submit(event: Event) {
    event.preventDefault();
    if (this.inputType === 'fromJson') {
      try {
        this.model = JSON.parse(this.modelStr);

      } catch (error) {
        alert(error);
      }
    }
    localStorage.setItem('firebaseConfig', JSON.stringify(this.model));
    console.log(this.model);
  }
  changeType(type: string) {
    this.inputType = type;
  }

}
