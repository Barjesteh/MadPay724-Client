import { Routes, RouterModule } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: '', redirectTo: '/Auth/Login', pathMatch: 'full'
   },
   {
    path: 'Auth', redirectTo: '/Auth/Login', pathMatch: 'full'
   },
   {
    path: 'Auth/Login', redirectTo: '/Auth/Login', pathMatch: 'full'
   },
   {
    path: 'Auth/Register', redirectTo: '/Auth/Register', pathMatch: 'full'
   },
   {
    path: 'Panel', redirectTo: '/Panel', pathMatch: 'full'
   },
];

