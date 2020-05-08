import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from '../intro/intro.component';
import { CarsComponent } from '../cars/cars.component';
import { CarsResolver } from '../CarsResolver';
import { AttivaMacchineGuard } from '../attiva-macchine.guard';
import { CarComponent } from '../cars/car/car.component';
import { InfoComponent } from '../info/info.component';
import { NonTrovatoComponent } from '../non-trovato/non-trovato.component';

const rotte: Routes = [
  { path: '', component: IntroComponent },
  {
    path: 'cars', component: CarsComponent, resolve: { macchineRisolte: CarsResolver },
    canActivateChild: [AttivaMacchineGuard], canActivate: [AttivaMacchineGuard], children: [
      { path: ':id', component: CarComponent }
    ]
  },
  { path: 'info', component: InfoComponent },
  { path: 'non-trovato', component: NonTrovatoComponent, data: { messaggio: 'IL PATH NON ESISTE !!!!' } },
  { path: '**', redirectTo: '/non-trovato' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotte)
  ],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
