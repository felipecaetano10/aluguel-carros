import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarRegistrationPage } from './car-registration.page';

const routes: Routes = [
  {
    path: '',
    component: CarRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRegistrationPageRoutingModule {}
