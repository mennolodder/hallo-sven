import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hartjes-teller',
  templateUrl: './hartjes-teller.component.html',
  styleUrls: ['./hartjes-teller.component.scss'],
})
export class HartjesTellerComponent implements OnInit {
  aantalHartjes = 0;
  gebrokenHartjes = 0;
  constructor() {}

  ngOnInit(): void {}

  meerHartjes() {
    this.aantalHartjes = this.aantalHartjes + 1;
  }

  minderHartjes() {
    this.gebrokenHartjes = this.gebrokenHartjes + 1;
  }
}
