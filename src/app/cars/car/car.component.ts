import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/CarsService';
import { Observable, Observer, Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnDestroy {


  car: Car;

  sottoscrizioneIntervallo: Subscription;

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    console.log("Elemento distrutto: " + this.car.nome);
    this.sottoscrizioneIntervallo.unsubscribe();
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

      this.carsService.getCarById(+params['id']).subscribe((car: Car) => {
        this.car = car;
      });

    });

    const observable$ = new Observable((observer: Observer<number>) => {

      let contatore = 0;

      const intervalProcessId = setInterval(() => {
        contatore++;
        observer.next(contatore);

      }, 1000);

      return () => {
        clearInterval(intervalProcessId);
      }

    });

    this.sottoscrizioneIntervallo = observable$.subscribe({ next: console.log });

  }


}
