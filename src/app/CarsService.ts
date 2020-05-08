import { Car } from './models/Car';

export class CarsService {

    constructor() { }

    macchine: Car[];

    getCars(): Promise<Car[]> {

        // return fetch("../assets/cars.json")
        //     .then(response => response.json());
        return fetch("../assets/cars.json")
            .then(response => {
                return new Promise((resolve) =>
                    setTimeout(() => {
                        resolve(response.json())
                    }, 5000))
            });

        // return new Promise((resolve) => {

        //     setTimeout(() => {
        //         // reject(new Error("Errore"))
        //         resolve(this.cars) //reject(new Error("Errore"))
        //     }, 5000);

        // });

    }

}