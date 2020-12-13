import { CarType } from './car-type.enum';

export class Car {
    codigo: number | string;
    placa: string;
    cor: string;
    fabricante: string;
    modelo: string;    
    ano: string;
    tipo: CarType | string;
    chassi: string;
    renavam: string;
    diaria: number | string;
    foto: string;    
}
