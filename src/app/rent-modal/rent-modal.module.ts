import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentModalPageRoutingModule } from './rent-modal-routing.module';

import { RentModalPage } from './rent-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentModalPageRoutingModule
  ],
  declarations: [RentModalPage]
})
export class RentModalPageModule {}
