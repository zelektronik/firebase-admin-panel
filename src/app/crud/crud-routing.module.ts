import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityAddComponent } from './entity-add/entity-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: EntityListComponent
  },
  {
    path: 'add',
    component: EntityAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
