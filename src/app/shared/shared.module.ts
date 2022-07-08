import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { BottomProfileOverviewComponent } from './components/bottom-profile-overview/bottom-profile-overview.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BoxShopComponent } from './components/box-shop/box-shop.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CardsComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    GenericSectionComponent,
    BottomProfileOverviewComponent,
    HeaderComponent,
    BoxShopComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,       
    MatToolbarModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatSidenavModule,
    MatInputModule,
  ],
  exports: [
    CardsComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    HeaderComponent,
    GenericSectionComponent
  ]
})
export class SharedModule { }
