import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(JSON.parse(localStorage.getItem('firebaseConfig'))),
    AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [AngularFireDatabase, FirebaseService]
})
export class FirebaseModule { }
