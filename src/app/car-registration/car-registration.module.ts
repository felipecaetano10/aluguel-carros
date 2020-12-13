import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRegistrationPageRoutingModule } from './car-registration-routing.module';

import { CarRegistrationPage } from './car-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRegistrationPageRoutingModule
  ],
  declarations: [CarRegistrationPage]
})
export class CarRegistrationPageModule {}
