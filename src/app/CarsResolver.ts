import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Car } from './models/Car';
import { Observable } from 'rxjs';
import { CarsService } from './CarsService';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsResolver implements Resolve<Car[]> {

    constructor(private carService: CarsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Car[] | Observable<Car[]> | Promise<Car[]> {

        return this.carService.getCars$();

    }


}