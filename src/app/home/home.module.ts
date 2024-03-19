import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HeaderComponent, BodyComponent, FooterComponent],
})
export class HomeModule {}
