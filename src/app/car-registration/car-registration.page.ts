import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../shared/car';
import { CarType } from '../shared/car-type.enum';
import { CarService } from '../shared/car.service';

@Component({
  selector: 'app-car-registration',
  templateUrl: './car-registration.page.html',
  styleUrls: ['./car-registration.page.scss'],
})
export class CarRegistrationPage implements OnInit {

  car: Car;
  types = Object.keys(CarType).map((key) => ({value: key, description: CarType[key]}));

  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
       
    this.car = new Car();

    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('codigo'));
    if(codigo){
      this.car = this.carService.getCar(codigo);
    }
  }

  ngOnInit() {
  }
  
  register(){    
    this.car.codigo = Math.floor(Math.random() * 99999999);
    this.car.diaria = parseFloat(this.car.diaria.toString());
    this.car.tipo = CarType[this.car.tipo];
    this.carService.register(this.car);
    this.router.navigate(['/home/car-list'])
  }

}
