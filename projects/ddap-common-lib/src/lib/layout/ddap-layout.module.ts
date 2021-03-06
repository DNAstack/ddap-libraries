import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBtnComponent } from './header/header-btn/header-btn.component';
import { HeaderAddBtnComponent } from './header/header-add-btn/header-add-btn.component';
import { SandboxBannerComponent } from './sandbox-banner/sandbox-banner.component';
import { SearchableHeaderComponent } from './header/searchable-header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RealmInterceptor } from './realm/realm-interceptor.service';
import { LandingInfoCardComponent } from './landing-info-card/landing-info-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RealmInputComponent } from './realm/realm-input/realm-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { SidenavLeftComponent } from './sidenav-left/sidenav-left.component';
import { RealmEditDialogComponent } from './realm/realm-edit-dialog/realm-edit-dialog.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { CoverMessageComponent } from './cover-message/cover-message.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  RealmActionConfirmationDialogComponent
} from './realm/realm-action-confirmation-dialog/realm-action-confirmation-dialog.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBtnComponent,
    HeaderAddBtnComponent,
    LandingInfoCardComponent,
    MainComponent,
    SandboxBannerComponent,
    SearchableHeaderComponent,
    RealmInputComponent,
    RealmActionConfirmationDialogComponent,
    SidenavLeftComponent,
    RealmEditDialogComponent,
    CoverMessageComponent,
    ImagePreviewComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSelectModule,
  ],
  exports: [
    HeaderComponent,
    HeaderBtnComponent,
    HeaderAddBtnComponent,
    LandingInfoCardComponent,
    MainComponent,
    SandboxBannerComponent,
    SearchableHeaderComponent,
    RealmInputComponent,
    SidenavLeftComponent,
    CoverMessageComponent,
    ImagePreviewComponent,
    PaginatorComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RealmInterceptor, multi: true },
  ],
})
export class DdapLayoutModule { }
