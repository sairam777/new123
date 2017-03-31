import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';
import {routing} from './app.routing';
import { AppService } from './app.service';
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import { FlashMessagesModule } from 'angular2-flash-messages';



import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    WelcomeComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FlashMessagesModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
