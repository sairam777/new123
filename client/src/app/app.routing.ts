import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const appRoutes: Routes=[
  {
    path:'',
    component:LoginComponentComponent
  },
  {
    path:'register',
    component:RegisterComponentComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  }

]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
