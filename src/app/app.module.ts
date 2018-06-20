import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SchemasModule } from './schemas/schemas.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'schemas',
    loadChildren: 'app/schemas/schemas.module#SchemasModule'
  },
  {
    path: 'configurations',
    loadChildren: 'app/configurations/configurations.module#ConfigurationsModule'
  },
  {
    path: 'crud',
    loadChildren: 'app/crud/crud.module#CrudModule'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SchemasModule, FormsModule,
    RouterModule.forRoot(
      APP_ROUTES
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

