import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.css']
})
export class SchemaListComponent implements OnInit {
  schemas: Observable<Array<any>>;
  constructor(
    private db: AngularFireDatabase,
    private router: Router) {

  }

  ngOnInit() {
    this.schemas = this.db.list('schemas').snapshotChanges();
  }
  delete(item) {
    this.db.list('schemas').remove(item);
  }
  edit(key) {
    this.router.navigate(['schemas', 'edit', key]);
  }
  addItem(name) {
    this.router.navigate(['crud', 'list', { s: name }]);
  }
}
