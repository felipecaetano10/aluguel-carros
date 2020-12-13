import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'car-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../car-list/car-list.module').then( m => m.CarListPageModule)
          }
        ]
      },
      {
        path: 'rent-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../rent-list/rent-list.module').then( m => m.RentListPageModule)
          }
        ]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
