import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Auth/Auth.module';
import { PanelModule } from './Panel/Panel.module';
import { AdminRoutes } from './Routes/Routes';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AuthModule,
    RouterModule.forRoot(AdminRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
