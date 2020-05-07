import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'ddaplib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{

  @Input()
  disableMobile?: boolean = false;
  @Input()
  maxWidth?: string = '599px';
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.isMatched(`(max-width: ${this.maxWidth})`)
  }
}
