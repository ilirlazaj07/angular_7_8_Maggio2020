import { Car } from './models/Car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

    constructor(private httpClient: HttpClient) { }

    macchine: Car[];

    getCars$(): Observable<Car[]> {
        return this.httpClient.get<Car[]>("../assets/cars.json");
    }

    getCars(): Promise<Car[]> | Observable<Car[]> {

        return this.httpClient.get<Car[]>("../assets/cars.json").toPromise();

        // return fetch("../assets/cars.json")
        //     .then(response => response.json());
        /** return fetch("../assets/cars.json")
             .then(response => {
                 return new Promise((resolve) =>
                     setTimeout(() => {
                         resolve(response.json())
                     }, 5000))
             });
 */
        // return new Promise((resolve) => {

        //     setTimeout(() => {
        //         // reject(new Error("Errore"))
        //         resolve(this.cars) //reject(new Error("Errore"))
        //     }, 5000);

        // });

    }

}