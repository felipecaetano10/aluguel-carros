import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../shared/car';
import { CarType } from '../shared/car-type.enum';
import { CarService } from '../shared/car.service';
import { Estados } from '../shared/estados.enum';
import { Rent } from '../shared/rent';
import { RentService } from '../shared/rent.service';

@Component({
  selector: 'app-rent-registration',
  templateUrl: './rent-registration.page.html',
  styleUrls: ['./rent-registration.page.scss'],
})
export class RentRegistrationPage implements OnInit {

  rent: Rent; 
  car: Car;
  estados = Object.keys(Estados).map((key) => ({value: key, description: Estados[key]}));
  carros = this.carService.getCars();

  constructor(    
    private rentService: RentService,
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
      this.rent = new Rent();
      this.car = {
        codigo: 1,
        placa: "AAA-0101",
        cor: "Branco",
        fabricante: "Peugeot",
        modelo: "Astra",
        ano: "2005",
        tipo: CarType.HIBRIDO,
        chassi: "12341234",
        renavam: "43214321",
        diaria: 150,
        foto: 'https://s.glbimg.com/jo/g1/f/original/2011/08/18/astra-hatch-foto-1.jpg'
      };

      const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('codigo'));
      if(codigo){
        this.rent = this.rentService.getRent(codigo);
      }
    }

  ngOnInit() {
  }

  register(){    
    this.rent.codigo = Math.floor(Math.random() * 99999999);
    this.rentService.register(this.rent);
    this.router.navigate(['/home/rent-list'])
  }
}
