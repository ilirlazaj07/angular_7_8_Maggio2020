import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, fromEvent, of, interval, concat } from 'rxjs';
import { concatMap, take, tap } from 'rxjs/operators';
import { Car } from './models/Car';
import { CarsService } from './CarsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private carService: CarsService) { }

  title: any = 4;

  testo: string;

  macchine: Observable<Car[]>;

  sottoscrizione: Subscription;

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    this.sottoscrizione.unsubscribe();
  }



  unsubscribe(): void {
    this.sottoscrizione.unsubscribe();
  }

  creaObsDaEventoDOM(domElement: HTMLElement, evento: string): Observable<string> {
    // Creare un'observable che resta in attesa di eventi su determinati componenti del DOM

    return new Observable((observer: Observer<string>) => {

      domElement.addEventListener(evento, () => {
        observer.next("cliccato");


      })

    })



  }


  ngOnInit(): void {

    this.macchine = this.carService.getCars$();

    const obs2$ = of(4, 5, 6).pipe();

    const obs1$ = of(1, 2, 3, 66, 87).pipe(
      tap((parameters) => {
        console.log(parameters);
        console.log("=================================");
      }),
      concatMap((parameters) => obs2$)
    );

    const concatenazione = concat(obs1$, obs2$);

    // const intervallo$ = interval(1000);

    obs1$.subscribe({
      next: console.log,
      complete: () => {
        console.log("OF COMPLETE !!!!!!")
      },
      error: console.log
    });




    const giàFatto$ = fromEvent(document.querySelector(".componente"), 'click');

    this.sottoscrizione = this.creaObsDaEventoDOM(document.querySelector(".componente"), 'click').subscribe({ next: console.log });

    const observable$ = new Observable((observer: Observer<number>) => {

      observer.next(0);

      setTimeout(() => {
        observer.next(3);

      }, 3000);

      setTimeout(() => {
        observer.next(5);
      }, 5000);

      setTimeout(() => {
        observer.next(6);
      }, 6000);

      setTimeout(() => {

        observer.complete();

      }, 8000);


    });

    /**  observable$.subscribe({
  
        error: console.error,
  
        next: console.log,
  
        complete: () => {
          console.log("OBSERVABLE COMPLETATA !!!")
        }
  
      }); */


  }


  testoDigitato(e: string) {
    this.testo = e;
  }

  fun() { // TWO WAY BINDING ????

    this.title = "2";
  }
}

//ES6

//static typing VS dynamic typing