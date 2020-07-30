import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {EmployesListComponent} from './components/employes-list/employes-list.component';



const routes: Routes = [
  {path: 'employes', component: EmployesListComponent},


];

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
