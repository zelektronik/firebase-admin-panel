import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityAddComponent } from './entity-add/entity-add.component';
import { EntityEditComponent } from './entity-edit/entity-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: EntityListComponent
  },
  {
    path: 'add',
    component: EntityAddComponent
  },
  {
    path: 'edit/:key',
    component: EntityEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
