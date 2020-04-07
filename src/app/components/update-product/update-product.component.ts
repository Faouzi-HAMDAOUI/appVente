import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { UserProductsService } from 'src/app/services/user-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  id: string;
  product: ProductModule = {
    name: '',
    mark: '',
    picture: 'image.png',
    description: '',
    date: '',
    user: '',
    price: null
  };
  constructor(private userService: UserProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getProduct(this.id).subscribe(product => {
      this.product = product;
    })
  }
  //
  updateProduct(){
      this.product.id = this.id;
      this.userService.updateProduct(this.product);
      this.flashMessage.show('Product updated', {scssClass: 'alert-success', timeout: 4000});
       this.router.navigate(['/my-product/', this.id]);
  }

}
