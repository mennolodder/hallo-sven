import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

const breedte = 500;
const hoogte = 400;
const balSize = 25;
const randBreedte = 20;

@Component({
  selector: 'app-ping-pong',
  templateUrl: './ping-pong.component.html',
  styleUrls: ['./ping-pong.component.scss'],
})
export class PingPongComponent implements AfterViewInit {
  @ViewChild('bal')
  bal!: ElementRef<HTMLDivElement>;

  balTop = 200;
  balLeft = 200;

  balOmlaag = false;
  balNaarRechts = true;

  ngAfterViewInit(): void {
    const i = setInterval(() => {
      this.volgendeTijd();
    }, 15);
  }

  volgendeTijd(): void {
    this.stuiteren();
    this.verplaatsBal();
  }

  private verplaatsBal() {
    if (this.balOmlaag) {
      this.balTop = this.balTop + 1;
    } else {
      this.balTop = this.balTop - 1;
    }

    if (this.balNaarRechts) {
      this.balLeft = this.balLeft + 1;
    } else {
      this.balLeft = this.balLeft - 1;
    }

    this.bal.nativeElement.style.top = this.balTop.toString() + 'px';
    this.bal.nativeElement.style.left = this.balLeft.toString() + 'px';
  }

  private stuiteren() {
    // boven
    if (this.balTop < 0) {
      this.balOmlaag = true;
    }

    //onder
    if (this.balTop > hoogte - balSize) {
      this.balOmlaag = false;
    }

    //rechts
    if (this.balLeft > breedte - (balSize + randBreedte)) {
      this.balNaarRechts = false;
    }

    if (this.balLeft < 0 + randBreedte) {
      this.balNaarRechts = true;
    }
  }
}
