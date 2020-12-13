import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentModalPage } from './rent-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentModalPageRoutingModule {}
