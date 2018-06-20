import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemasRoutingModule } from './schemas-routing.module';
import { SchemaAddComponent } from './schema-add/schema-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsBootstrapUIModule } from '@ng-dynamic-forms/ui-bootstrap';
import { FirebaseModule } from '../firebase/firebase.module';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { SchemaEditComponent } from './schema-edit/schema-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SchemasRoutingModule,
    CommonModule, FormsModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    FirebaseModule,
    DynamicFormsBootstrapUIModule
  ],
  declarations: [SchemaAddComponent, SchemaListComponent, SchemaEditComponent]
})
export class SchemasModule { }
