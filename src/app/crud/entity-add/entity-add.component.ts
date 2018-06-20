import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormService } from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-entity-add',
  templateUrl: './entity-add.component.html',
  styleUrls: ['./entity-add.component.css']
})
export class EntityAddComponent implements OnInit {
  schemaKey: string;
  formModel: any[];
  formGroup: any;
  schema: any;
  constructor(private db: AngularFireDatabase,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formService: DynamicFormService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.schemaKey = params.s;
        this.db.object('schemas/' + params.s)
          .valueChanges()
          .subscribe(
            (d: { name: string, formArray: Array<any> }) => {
              this.schema = d;
              this.formModel = this.formService.fromJSON(d.formArray);
              this.formGroup = this.formService.createFormGroup(this.formModel);
            }
          );
      });
  }
  onSubmit() {
    this.db.list(this.schema.name).push(this.formGroup.value).then(() => {
      this.router.navigate(['crud', 'list', { s: this.schemaKey }]);
    });
  }
}
