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
@NgModule({
  declarations: [
    CardsComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    GenericSectionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CardsComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    GenericSectionComponent
  ]
})
export class SharedModule { }
