import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { FirebaseConfigComponent } from './firebase-config/firebase-config.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    ConfigurationsRoutingModule
  ],
  declarations: [FirebaseConfigComponent]
})
export class ConfigurationsModule { }
