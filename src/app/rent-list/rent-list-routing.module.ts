import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentListPage } from './rent-list.page';

const routes: Routes = [
  {
    path: '',
    component: RentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentListPageRoutingModule {}
