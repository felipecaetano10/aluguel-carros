import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentListPageRoutingModule } from './rent-list-routing.module';

import { RentListPage } from './rent-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentListPageRoutingModule
  ],
  declarations: [RentListPage]
})
export class RentListPageModule {}
