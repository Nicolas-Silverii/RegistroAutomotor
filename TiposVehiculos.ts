import { Vehiculo } from './vehiculo';

export class Auto extends Vehiculo {
    private cantidadPuertas: number;

    constructor(marca: string, modelo: string, anio: number, cantidadPuertas: number, patente: string) {
        super(marca, modelo, anio, patente);
        this.cantidadPuertas = cantidadPuertas;
    }

    getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }
}

export class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(marca: string, modelo: string, anio: number, cilindrada: number, patente: string) {
        super(marca, modelo, anio, patente);
        this.cilindrada = cilindrada;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }
}

export class Camion extends Vehiculo {
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, anio: number, capacidadCarga: number, patente: string) {
        super(marca, modelo, anio, patente);
        this.capacidadCarga = capacidadCarga;
    }

    getCapacidadCarga(): number {
        return this.capacidadCarga;
    }
}
