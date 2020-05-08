import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { CarsService } from './CarsService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
