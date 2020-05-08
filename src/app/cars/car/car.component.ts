import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/CarsService';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnDestroy {

  @Input()
  car: Car;

  @Output()
  cancellazioneEmitter: EventEmitter<Car> = new EventEmitter();

  sottoscrizioneIntervallo: Subscription;

  constructor(private carsService: CarsService) { }

  ngOnDestroy(): void {
    console.log("Elemento distrutto: " + this.car.nome);
    this.sottoscrizioneIntervallo.unsubscribe();
  }

  ngOnInit(): void {

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

  cancellami() {
    this.cancellazioneEmitter.emit(this.car);
    console.log("Car " + this.car.id + " in cancellazione !");
  }

}
