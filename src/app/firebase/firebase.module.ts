import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(JSON.parse(localStorage.getItem('firebaseConfig'))),
    AngularFireDatabaseModule, AngularFireAuthModule
  ],
  declarations: [],
  providers: [AngularFireDatabase, AngularFireAuth, FirebaseService]
})
export class FirebaseModule { }
