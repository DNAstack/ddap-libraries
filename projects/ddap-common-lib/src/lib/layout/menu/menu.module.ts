import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DdapLayoutModule } from "../ddap-layout.module";
import { MenuProfileComponent } from './menu-profile/menu-profile.component';
import { MenuAppsComponent } from './menu-apps/menu-apps.component';
import { MenuTermsComponent } from './menu-terms/menu-terms.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuProfileComponent,
    MenuAppsComponent,
    MenuTermsComponent
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
    MenuComponent,
    MenuProfileComponent,
    MenuAppsComponent,
    MenuTermsComponent
  ]
})
export class MenuModule { }
