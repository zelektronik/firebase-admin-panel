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
import { ServicesModule } from '../services/services.module';
import { LoginComponent } from './login/login.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule, CrudRoutingModule, FormsModule,
    ReactiveFormsModule, ServicesModule,
    DynamicFormsCoreModule.forRoot(),
    FirebaseModule,
    DynamicFormsBootstrapUIModule, AuthModule
  ],
  declarations: [EntityListComponent, EntityAddComponent, EntityEditComponent, LoginComponent]
})
export class CrudModule { }
