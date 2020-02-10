import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() appname: string; 
  public sitename : string;
  @Input() sections : any;

  constructor(
  ) {
  }
}