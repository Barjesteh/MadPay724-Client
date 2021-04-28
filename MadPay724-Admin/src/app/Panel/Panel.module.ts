import { NgModule } from '@angular/core';
import { PanelComponent } from './Panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { PanelRoutes } from './Routes/Routes';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(PanelRoutes)
  ],
  declarations: [PanelComponent],
  bootstrap: [PanelComponent]
})
export class PanelModule { }
