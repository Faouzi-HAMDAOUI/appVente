import { Component, OnInit } from '@angular/core';
import { UserProductsService } from 'src/app/services/user-products.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { ProductModule } from 'src/app/models/product/product.module';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: ProductModule = {
    name: '',
    mark: '',
    picture: 'image.png',
    description: '',
    date: '',
    user: '',
    price: null
  };
  constructor(
      private userProductService: UserProductsService,
      private route: Router,
      private flashMessages: FlashMessagesService,
      private authUser: AuthUserService
      ) { }
  ngOnInit(): void {
    this.authUser.getAuth().subscribe(auth => {
     this.product.user = auth.uid;
    });
  }
  // Ajouter un client
  onSubmit(){
   this.userProductService.newProduct(this.product);
   this.flashMessages.show('Product added successfully', {scssClass: 'alert-primary', timeout: 5000});
   return this.route.navigate(['/home-user']);
  }

}
