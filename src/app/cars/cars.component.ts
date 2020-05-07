import { Component, OnInit, OnDestroy } from '@angular/core';
import { Car } from '../models/Car';
import { CarsService } from '../CarsService';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarsService]
})
export class CarsComponent implements OnInit, OnDestroy {

  cars: Car[];

  colore: string = 'red';

  title = 'CarsComponent'; //con INTERPOLATION

  // Cosa sono : Property Binding & Event Binding; 

  constructor(private carsService: CarsService) { }

  ngOnDestroy(): void { }

  ascolta(qualcosa: Event): void {
    console.log((qualcosa.target as HTMLParagraphElement).innerText);
  }

  valutaTu() {
    return true;
  }


  cancellaUno(daCancellare: Car) {
    this.cars = this.cars.filter(
      (car: Car) => car.id != daCancellare.id
    )


  }

  ngOnInit(): void {

    this.carsService.getCars().then(
      (questeLeMacchineRIsolte: Car[]) => {
        this.cars = questeLeMacchineRIsolte;

        this.cars.map((car: Car) => {
          car.nome += "_TEST";
        });
      },
      (e) => {
        console.log(e);
      }
    ).catch().finally();

    // THIS

    setTimeout(
      () => {

        // this.cars.pop();

      }
      , 4000);

    console.log("CarsComponent OnInit");

  }


}
