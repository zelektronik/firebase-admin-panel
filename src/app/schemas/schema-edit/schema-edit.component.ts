import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { DynamicFormService, DynamicFormArrayModel } from '@ng-dynamic-forms/core';
import { SCHEMA_EDIT_FORM_MODEL } from './schema-edit.form.model';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-schema-edit',
  templateUrl: './schema-edit.component.html',
  styleUrls: ['./schema-edit.component.css']
})
export class SchemaEditComponent implements OnInit {
  formGroup: FormGroup;
  formModel: any = SCHEMA_EDIT_FORM_MODEL;
  key: any;
  formArrayControl: FormArray;
  formArrayModel: DynamicFormArrayModel;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private formService: DynamicFormService,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formArrayControl = this.formGroup.get('formArray') as FormArray;
    this.formArrayModel = this.formService.findById('formArray', this.formModel) as DynamicFormArrayModel;
    this.activatedRoute.params.subscribe(
      params => {
        this.key = params.key;
        this.db.object('schemas/' + params.key)
          .valueChanges()
          .subscribe(
            (d: { name: string, formArray: Array<any> }) => {
              this.formService.clearFormArray(this.formArrayControl, this.formArrayModel);
              for (let i = 0; i < d.formArray.length; i++) {
                this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
              }
              this.formGroup.patchValue(d);
            }
          );
      });
  }
  onSubmit() {
    this.db.list('schemas').update(this.key, this.formGroup.value).then(() => {
      this.router.navigate(['schemas', 'list']);
    });
  }
  addItem() {
    this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
  }
  clear() {
    this.formService.clearFormArray(this.formArrayControl, this.formArrayModel);
  }
}
