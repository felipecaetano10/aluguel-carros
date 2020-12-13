import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Car } from '../shared/car';
import { CarService } from '../shared/car.service';
import {ModalController} from '@ionic/angular'; 
import { CarModalPage } from '../car-modal/car-modal.page';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit, ViewWillEnter {

  carList: Car[];

  constructor(private carService: CarService, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  OpenModal(car: Car) {
    this.modalController.create({component:CarModalPage, cssClass: 'my-custom-modal-css',componentProps:{car: car}}).then((modalElement)=>{
      modalElement.present();
    })
  }

  ionViewWillEnter(){
    this.list();
  }

  list() {
    this.carList = this.carService.getCars();
  }

  edit(car: Car){
    this.router.navigate(['/car-registration',car.codigo]);
    this.list();
  }

  remove(car: Car){
    console.log('remove' + car.modelo);
    this.carService.remove(car);
    this.list();
  }

}
