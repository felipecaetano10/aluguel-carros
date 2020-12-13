import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentRegistrationPage } from './rent-registration.page';

const routes: Routes = [
  {
    path: '',
    component: RentRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentRegistrationPageRoutingModule {}
