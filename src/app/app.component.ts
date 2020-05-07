import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})
export class AppComponent {
  title: any = 4;
  
  fun() {
    this.title = "2";
  }
}

//ES6

//static typing VS dynamic typing