import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule { 
  id?: string;
  name?: string;
  mark?: string;
  picture?: string;
  description?: string;
  price?: number;
  date?: string;
  user?: string;
}
