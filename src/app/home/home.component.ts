import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  saluto: string = 'Home WORKS (PROMESSA) !!!!!!!!!!!!';

  date1 = new Date();

  ngOnInit(): void {

    const promessa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(this.saluto)
      }, 5000);

    });

    promessa.then((ritorno: string) => {
      console.log(ritorno);
    });

  }



}
