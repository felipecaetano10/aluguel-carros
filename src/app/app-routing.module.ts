import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'car-list',
    loadChildren: () => import('./car-list/car-list.module').then( m => m.CarListPageModule)
  },
  {
    path: 'car-registration',
    loadChildren: () => import('./car-registration/car-registration.module').then( m => m.CarRegistrationPageModule)
  },
  {
    path: 'car-registration/:codigo',
    loadChildren: () => import('./car-registration/car-registration.module').then( m => m.CarRegistrationPageModule)
  },
  {
    path: 'car-modal',
    loadChildren: () => import('./car-modal/car-modal.module').then( m => m.CarModalPageModule)
  },
  {
    path: 'rent-list',
    loadChildren: () => import('./rent-list/rent-list.module').then( m => m.RentListPageModule)
  },
  {
    path: 'rent-registration',
    loadChildren: () => import('./rent-registration/rent-registration.module').then( m => m.RentRegistrationPageModule)
  },
  {
    path: 'rent-registration/:codigo',
    loadChildren: () => import('./rent-registration/rent-registration.module').then( m => m.RentRegistrationPageModule)
  },
  {
    path: 'rent-modal',
    loadChildren: () => import('./rent-modal/rent-modal.module').then( m => m.RentModalPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
