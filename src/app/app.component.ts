import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  constructor(private lsService: LocalStorageService) {
  }
  ngOnInit(): void {
    this.lsService.onChanged
      .subscribe(
        d => {
          this.title = d.value ? JSON.parse(d.value).databaseURL : undefined;
        }
      );
    if (this.lsService.getItem('firebaseConfig')) {
      this.title = JSON.parse(this.lsService.getItem('firebaseConfig')).databaseURL;
    }
  }
  removeConfig(event) {
    this.lsService.setItem('firebaseConfig', null);
  }
}
