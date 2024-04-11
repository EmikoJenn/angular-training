import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SideBarComponent]
})
export class SideBarModule { }
