import { NgModule } from '@angular/core';
import { SidenavLeftComponent } from './sidenav-left.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SidenavLeftComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    SidenavLeftComponent
  ]
})
export class SideNavLeftModule { }
