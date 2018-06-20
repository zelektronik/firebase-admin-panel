import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  ngOnInit(): void {
    if (localStorage.getItem('firebaseConfig')) {
      this.title = JSON.parse(localStorage.getItem('firebaseConfig')).databaseURL;
      
    }
  }
  removeConfig(event) {
    localStorage.clear();
    this.title = null;
  }
}
