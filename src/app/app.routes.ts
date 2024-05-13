import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(component => component.HomeComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/details/details.component').then(component => component.DetailsComponent)
  }
];
