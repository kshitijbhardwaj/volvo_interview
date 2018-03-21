import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetails }   from './user-details.component';
import {InterviewComponent} from "./user/user.component";

const routes: Routes = [
  { path: 'detail/:id', component: UserDetails },
  { path: 'users', component: InterviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
