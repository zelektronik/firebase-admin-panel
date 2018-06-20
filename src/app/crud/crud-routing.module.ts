import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityAddComponent } from './entity-add/entity-add.component';
import { EntityEditComponent } from './entity-edit/entity-edit.component';
import { LoginComponent } from './login/login.component';
import { ReadGuard } from '../auth/guards/read.guard';

const routes: Routes = [
  {
    path: 'list',
    component: EntityListComponent,
    canActivate: [ReadGuard]
  },
  {
    path: 'add',
    component: EntityAddComponent
  },
  {
    path: 'edit/:key',
    component: EntityEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
