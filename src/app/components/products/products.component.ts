import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
