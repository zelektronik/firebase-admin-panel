import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class LocalStorageService {

  public onChanged: Subject<{ key: string, value: any }> = new Subject<{ key: string, value: any }>();
  constructor() { }
  getItem(key: any): string {
    return localStorage.getItem(key);
  }
  setItem(key: any, value: any): any {
    localStorage.setItem(key, value);
    this.onChanged.next({ key: key, value: value });
  }
  clear() {
    localStorage.clear();
    this.onChanged.next(null);
  }
}
