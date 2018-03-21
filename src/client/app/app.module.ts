import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {UserService} from "./user/user.service";
import {InterviewComponent} from "./user/user.component";
import {UserModule} from "./user/user.module";


@NgModule({
  imports: [BrowserModule,
    HttpClientModule, AppRoutingModule,UserModule
    ],
  declarations: [AppComponent,InterviewComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },UserService],
  bootstrap: [AppComponent]

})
export class AppModule { }
