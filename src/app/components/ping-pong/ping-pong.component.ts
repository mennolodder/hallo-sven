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
  ngAfterViewInit(): void {
    const i = setInterval(() => {
      this.moveBal();
    }, 10);
  }

  moveBal(): void {
    this.balTop = this.balTop + 1;
    this.bal.nativeElement.style.top = this.balTop.toString() + 'px';
    this.balLeft = this.balLeft + 1;
    this.bal.nativeElement.style.left = this.balLeft.toString() + 'px';
  }
}
