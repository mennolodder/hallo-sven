import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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
    if (this.balTop > 400 - 25) {
      this.balOmlaag = false;
    }

    //rechts
    if (this.balLeft > 500 - 25) {
      this.balNaarRechts = false;
    }
    if (this.balLeft < 0) {
      console.log('stuiter');
      this.balNaarRechts = true;
    }
  }
}
