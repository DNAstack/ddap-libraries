import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DdapLayoutModule } from '../ddap-layout.module';
import { MenuProfileComponent } from './menu-profile/menu-profile.component';
import { MenuAppsComponent } from './menu-apps/menu-apps.component';
import { FooterComponent } from '../footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    MenuComponent,
    MenuProfileComponent,
    MenuAppsComponent,
    FooterComponent // FIXME: Should NOT be declared here, but in LayoutModule
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    DdapLayoutModule,
    MatTooltipModule,
  ],
  exports: [
    MenuComponent,
    MenuProfileComponent,
    MenuAppsComponent,
    FooterComponent
  ]
})
export class MenuModule { }
