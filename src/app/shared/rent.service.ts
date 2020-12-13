import { Injectable } from '@angular/core';
import { Car } from './car';
import { CarType } from './car-type.enum';
import { Estados } from './estados.enum';
import { Rent } from './rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
 
  rent: Rent[];
  car: Car;

  constructor() { 

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

    this.rent =[
      {
        codigo: 123,
        carro: this.car,
        nomeLoc: "Marcio Albino",
        CNHLoc: "12313123",
        enderecoLoc: "Rua tal tal",
        cidadeLoc: "Criciúma",
        estadoLoc: Estados.SC,
        cepLoc: "88845-000",
        dataInicio: new Date(2020, 0, 10),
        dataFim: new Date(2020, 1, 10),
      },
      {
        codigo: 321,
        carro: this.car,
        nomeLoc: "Roberto Justus",
        CNHLoc: "534543534",
        enderecoLoc: "Rua sadasdas",
        cidadeLoc: "Outra cidade",
        estadoLoc: Estados.SP,
        cepLoc: "88845-000",
        dataInicio: new Date(2020, 0, 10),
        dataFim: new Date(2020, 1, 10),
      },
      {
        codigo: 444,
        carro: this.car,
        nomeLoc: "Ar condicionado",
        CNHLoc: "434235235",
        enderecoLoc: "Rua 43534",
        cidadeLoc: "Cocal do Sul",
        estadoLoc: Estados.PR,
        cepLoc: "88845-000",
        dataInicio: new Date(2020, 0, 10),
        dataFim: new Date(2020, 1, 10),
      }
    ];
  }

  public getRents() {
    return this.rent;
  }

  public remove(rent: Rent) {
    this.rent = this.rent.filter(r => r.codigo !== rent.codigo);
    console.log(this.rent);
  }

  public register(rent: Rent) {
    const indice = this.rent.findIndex(c => c.codigo === rent.codigo);
    if(indice === -1){
      this.rent = [...this.rent, rent];
    } else {
      this.rent[indice] = {...rent};
    }
}

public getRent(codigo: number) {
  return this.rent.find(r => r.codigo === codigo);
}

}
