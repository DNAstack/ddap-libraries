import { Component, Input } from '@angular/core';

@Component({
  selector: 'ddaplib-landing-info-card',
  templateUrl: './landing-info-card.component.html',
  styleUrls: ['./landing-info-card.component.scss'],
})
export class LandingInfoCardComponent {

  @Input()
  title: string;

}
