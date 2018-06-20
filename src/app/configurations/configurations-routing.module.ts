import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseConfigComponent } from './firebase-config/firebase-config.component';

const routes: Routes = [
  {
    path: 'firebase',
    component: FirebaseConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
