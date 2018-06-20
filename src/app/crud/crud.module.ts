import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list/entity-list.component';
import { CrudRoutingModule } from './crud-routing.module';
import { EntityAddComponent } from './entity-add/entity-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { FirebaseModule } from '../firebase/firebase.module';
import { DynamicFormsBootstrapUIModule } from '@ng-dynamic-forms/ui-bootstrap';
import { EntityEditComponent } from './entity-edit/entity-edit.component';

@NgModule({
  imports: [
    CommonModule, CrudRoutingModule, FormsModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    FirebaseModule,
    DynamicFormsBootstrapUIModule
  ],
  declarations: [EntityListComponent, EntityAddComponent, EntityEditComponent]
})
export class CrudModule { }
