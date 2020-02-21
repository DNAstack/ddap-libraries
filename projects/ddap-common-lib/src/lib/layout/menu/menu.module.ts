import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {DdapLayoutModule} from "../ddap-layout.module";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    DdapLayoutModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
