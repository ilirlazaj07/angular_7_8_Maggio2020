import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { CarsService } from './CarsService';
import { IntroComponent } from './intro/intro.component';
import { InfoComponent } from './info/info.component';
import { NonTrovatoComponent } from './non-trovato/non-trovato.component';
import { CarsResolver } from './CarsResolver';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CarComponent,
    IntroComponent,
    InfoComponent,
    NonTrovatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomRoutingModule
  ],
  providers: [CarsService, CarsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
