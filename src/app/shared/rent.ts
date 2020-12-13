import { Car } from "./car";
import { Estados } from "./estados.enum";

export class Rent {
    codigo: number | string;
    carro: Car;
    CNHLoc: string;
    nomeLoc: string;
    enderecoLoc: string;
    cidadeLoc: string;
    estadoLoc: Estados;    
    cepLoc: string;
    dataInicio: Date;
    dataFim: Date;    
}
