import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-firebase-config',
  templateUrl: './firebase-config.component.html',
  styleUrls: ['./firebase-config.component.css']
})
export class FirebaseConfigComponent implements OnInit {

  model: any = {};
  inputType = 'fromJson';
  modelStr: any;
  constructor(private lsService: LocalStorageService) {
  }
  ngOnInit(): void {
    this.lsService.onChanged.subscribe(
      d => {
        if (d.key === 'firebaseConfig') {
          this.modelStr = d.value;
          if (this.modelStr) {
            this.model = JSON.parse(this.modelStr);
          }
        }
      }
    );
    this.modelStr = this.lsService.getItem('firebaseConfig');
    if (this.modelStr) {
      this.model = JSON.parse(this.modelStr);
    }
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
    this.lsService.setItem('firebaseConfig', JSON.stringify(this.model));
  }
  changeType(type: string) {
    this.inputType = type;
  }

}
