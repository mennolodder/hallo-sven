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

    //this.balLeft = this.balLeft + 1;

    this.bal.nativeElement.style.top = this.balTop.toString() + 'px';
    this.bal.nativeElement.style.left = this.balLeft.toString() + 'px';
  }

  private stuiteren() {
    if (this.balTop < 0) {
      this.balOmlaag = true;
    }
    if (this.balTop > 400 - 25) {
      this.balOmlaag = false;
    }
  }
}
