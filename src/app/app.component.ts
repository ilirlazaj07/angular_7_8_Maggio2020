import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title: any = 4;

  testo: string;

  creaObsDaEventoDOM(domElement, evento): Observable<string> {
    // Creare un'observable che resta in attesa di eventi su determinati componenti del DOM

    return null;
  }


  ngOnInit(): void {

    this.creaObsDaEventoDOM(document.querySelector(".componente"), 'click').subscribe({ next: console.log });

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