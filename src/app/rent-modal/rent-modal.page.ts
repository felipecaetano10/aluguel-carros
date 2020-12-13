import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Rent } from '../shared/rent';

@Component({
  selector: 'app-rent-modal',
  templateUrl: './rent-modal.page.html',
  styleUrls: ['./rent-modal.page.scss'],
})
export class RentModalPage implements OnInit {

  aluguel: Rent;

  constructor(private modalController: ModalController, private navParams: NavParams ) { }

  ngOnInit() {
    this.aluguel = this.navParams.get('rent');
    console.log(this.aluguel);
  }

  CloseModal() {
    this.modalController.dismiss();
  }

}
