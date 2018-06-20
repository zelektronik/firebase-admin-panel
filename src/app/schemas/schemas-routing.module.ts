import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemaAddComponent } from './schema-add/schema-add.component';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { SchemaEditComponent } from './schema-edit/schema-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: SchemaAddComponent
  },
  {
    path: 'edit/:key',
    component: SchemaEditComponent
  },
  {
    path: 'list',
    component: SchemaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemasRoutingModule { }
