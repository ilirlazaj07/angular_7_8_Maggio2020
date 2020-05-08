import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-non-trovato',
  templateUrl: './non-trovato.component.html',
  styleUrls: ['./non-trovato.component.css']
})
export class NonTrovatoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  messaggio: string;

  ngOnInit(): void {
    this.messaggio = this.route.snapshot.data['messaggio'];
  }

}
