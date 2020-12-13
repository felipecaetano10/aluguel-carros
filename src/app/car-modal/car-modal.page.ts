import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { Car } from '../shared/car';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.page.html',
  styleUrls: ['./car-modal.page.scss'],
})
export class CarModalPage implements OnInit {

  carro: Car;

  constructor(private modalController: ModalController, private navParams: NavParams ) { }

  ngOnInit() {
    this.carro = this.navParams.get('car');
    console.log(this.carro);
  }

  CloseModal() {
    this.modalController.dismiss();
  }

}
