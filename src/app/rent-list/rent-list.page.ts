import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Rent } from '../shared/rent';
import { RentService } from '../shared/rent.service';


@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.page.html',
  styleUrls: ['./rent-list.page.scss'],
})
export class RentListPage implements OnInit, ViewWillEnter {

  rentList: Rent[];

  constructor(private rentService: RentService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.list();
  }

  remove(rent: Rent){
    this.rentService.remove(rent);
    this.list();
  }

  edit(rent: Rent){
    this.router.navigate(['/rent-registration',rent.codigo]);
  }

  list() {
    this.rentList = this.rentService.getRents();
  }
} 
