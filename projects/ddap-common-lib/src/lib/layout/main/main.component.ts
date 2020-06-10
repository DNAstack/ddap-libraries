import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'ddaplib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  @Input()
  disableMobile = false;
  @Input()
  maxWidth = '599px';

  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched(`(max-width: ${this.maxWidth})`);
  }
}
