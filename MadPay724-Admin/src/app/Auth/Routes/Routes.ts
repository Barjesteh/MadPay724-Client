import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../Auth.component';
import { LoginComponent } from '../Login/Login.component';
import { RegisterComponent } from '../Register/Register.component';

export const AuthRoutes: Routes = [
  {
    path: 'Auth',
    component: AuthComponent,
    children: [
      {path: '', component: LoginComponent,
      data: {title: ['ورود به پنل کاربری']}},
      {path: 'Login', component: LoginComponent,
      data: {title: ['ورود به پنل کاربری']}},
      {path: 'Register', component: RegisterComponent,
      data: {title: ['ثبت نام در مادپی']}}
    ]
   },
];

