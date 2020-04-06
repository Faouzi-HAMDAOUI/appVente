import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { ProductModule } from 'src/app/models/product/product.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductModule[];
  total = 0;
  searchProduct: ProductModule[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
      this.productService.getProducts().subscribe( products => { // recuperer le listes des cliennt
      this.products = products;
      this.searchProduct = this.products = products;  
  
  });
  }

}
