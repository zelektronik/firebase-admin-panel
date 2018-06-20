import { Component, OnInit } from '@angular/core';
import { DynamicFormService, DynamicFormArrayModel } from '@ng-dynamic-forms/core';
import { SCHEMA_ADD_FORM_MODEL } from './schema-add.form.model';
import { FormGroup, FormArray } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schema-add',
  templateUrl: './schema-add.component.html',
  styleUrls: ['./schema-add.component.css']
})
export class SchemaAddComponent implements OnInit {
  formGroup: FormGroup;
  formModel: any = SCHEMA_ADD_FORM_MODEL;
  formArrayControl: any;
  formArrayModel: DynamicFormArrayModel;

  constructor(private formService: DynamicFormService,
    private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formArrayControl = this.formGroup.get('formArray') as FormArray;
    this.formArrayModel = this.formService.findById('formArray', this.formModel) as DynamicFormArrayModel;
  }
  onSubmit() {
    this.db.list('schemas').push(this.formGroup.value).then(() => {
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
