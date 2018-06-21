import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entity-edit',
  templateUrl: './entity-edit.component.html',
  styleUrls: ['./entity-edit.component.css']
})
export class EntityEditComponent implements OnInit {
  schemaKey: string;
  formModel: any[];
  formGroup: FormGroup;
  schema: any;
  entityKey: any;
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
              this.entityKey = params.key;
              this.schema = d;
              this.formModel = this.formService.fromJSON(d.formArray);
              this.formGroup = this.formService.createFormGroup(this.formModel);
              this.db.object(d.name + '/' + params.key)
                .valueChanges()
                .subscribe(e => {
                  this.formGroup.patchValue(e);
                });
            }
          );
      });
  }
  onSubmit() {
    this.db.list(this.schema.name).set(this.entityKey, this.formGroup.value).then(() => {
      this.router.navigate(['crud', 'list', { s: this.schemaKey }]);
    });
  }
  cancel(event) {
    event.preventDefault();
    this.router.navigate(['crud', 'list', { s: this.schemaKey }]);
  }
}
