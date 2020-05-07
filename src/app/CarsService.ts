import { Car } from './models/Car';

export class CarsService {

    cars: Car[] = [{ id: 1, prezzo: 2000, nome: 'BMW' }, { id: 2, prezzo: 30000, nome: 'BENZ' }];

    constructor() { }

    getCars(): Promise<Car[]> {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
               // reject(new Error("Errore"))
               resolve(this.cars) //reject(new Error("Errore"))
            }, 5000);

        });

    }

}