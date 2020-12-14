import { Injectable } from '@angular/core';
import { Car } from './car';
import { CarType } from './car-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  car: Car[];

  constructor() { 
    this.car = [
      {
        codigo: 1,
        placa: "AAA-0101",
        cor: "Branco",
        fabricante: "Ch",
        modelo: "Chevrolet",
        ano: "2005",
        tipo: CarType.HIBRIDO,
        chassi: "12341234",
        renavam: "43214321",
        diaria: 150,
        foto: 'https://s.glbimg.com/jo/g1/f/original/2011/08/18/astra-hatch-foto-1.jpg'
      },
      {
        codigo: 2,
        placa: "BBB-0202",
        cor: "Prata",
        fabricante: "Renault",
        modelo: "Fusca",
        ano: "2005",
        tipo: CarType.SEDAN,
        chassi: "12341234",
        renavam: "43214321",
        diaria: 280,
        foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/DSCF0281.jpg?quality=70&strip=info'
      },
      {
        codigo: 3,
        placa: "AAA-0303",
        cor: "Preto",
        fabricante: "Volkswagen",
        modelo: "Corsa",
        ano: "2005",
        tipo: CarType.LUXO,
        chassi: "12341234",
        renavam: "43214321",
        diaria: 130,
        foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/DSCF0281.jpg?quality=70&strip=info'
      }
    ];
  }

  public getCars() {
    return this.car;
  }

  public remove(car: Car) {
    this.car = this.car.filter(c => c.codigo !== car.codigo);
    console.log(this.car);
  }

  public register(car: Car) {
    const indice = this.car.findIndex(c => c.codigo === car.codigo);
    if(indice === -1){
      this.car = [...this.car, car];
    } else {
      this.car[indice] = {...car};
    }
}

  public getCar(codigo: number) {
    return this.car.find(c => c.codigo === codigo);
  }

}