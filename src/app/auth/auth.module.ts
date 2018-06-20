import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadGuard } from './guards/read.guard';
import { FirebaseModule } from '../firebase/firebase.module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseModule
  ],
  declarations: [],
  providers: [ReadGuard]
})
export class AuthModule { }
