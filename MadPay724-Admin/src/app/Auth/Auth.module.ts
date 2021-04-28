import { NgModule } from '@angular/core';
import { AuthComponent } from './Auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './Routes/Routes';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AuthRoutes)
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
