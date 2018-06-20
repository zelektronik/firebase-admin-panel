import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {
  data: Observable<Array<any>>;
  schema: { name: string; formArray: any[]; };
  schemaKey: any;

  constructor(private db: AngularFireDatabase,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.schemaKey = params.s;
        this.db.object('schemas/' + params.s)
          .valueChanges()
          .subscribe(
            (d: { name: string, formArray: Array<any> }) => {
              this.schema = d;
              this.data = this.db.list(d.name).snapshotChanges();
            }
          );
      });
  }
  addItem() {
    this.router.navigate(['crud', 'add', { s: this.schemaKey }]);
  }
  delete(key) {
    this.db.list(this.schema.name).remove(key);
  }
}
