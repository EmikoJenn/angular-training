import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, BodyModule, FooterModule],
  exports: [HeaderModule, BodyModule, FooterModule],
})
export class HomeModule {}
