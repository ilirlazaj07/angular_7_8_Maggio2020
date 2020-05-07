import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/CarsService';

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

  constructor(private carsService: CarsService) { }

  ngOnDestroy(): void {
   console.log("Elemento distrutto: " + this.car.nome)
  }

  ngOnInit(): void {
  }

  cancellami() {
    this.cancellazioneEmitter.emit(this.car);
    console.log("Car " + this.car.id + " in cancellazione !");
  }

}
