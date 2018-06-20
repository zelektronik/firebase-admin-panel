import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseAppConfig } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  private db: AngularFireDatabase;

  constructor() { }

  /** Function to initialize firebase application and
   * get DB provider for the corresponding application.
   */
  public initFirebaseApp(config) {
    const app = firebase.initializeApp(config);

  }

  /** Function to get firebase DB list */
  public getList(path: string): AngularFireList<{}> {
    return this.db.list(path);
  }

  /** Function to get firebase DB object */
  public getObject(path: string): AngularFireObject<{}> {
    return this.db.object(path);
  }
}
