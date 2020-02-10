import { NgModule } from '@angular/core';
import { SidenavLeftComponent } from './sidenav-left.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SidenavLeftComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ],
  exports: [
    SidenavLeftComponent
  ]
})
export class SideNavLeftModule { }
