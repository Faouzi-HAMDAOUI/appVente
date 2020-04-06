import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProductsService } from 'src/app/services/user-products.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.scss']
})
export class MyProductComponent implements OnInit {

  id: string;
  product: ProductModule;
showPrice = false;
  constructor(
    private productService: UserProductsService,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.productService.getProduct(this.id).subscribe(product => {
      this.product = product;
  });
  }
 // update balance
 onSubmit(){
  this.product.id = this.id;
  this.productService.updateProduct(this.product);
  this.flashMessage.show('Price updated', {scssClass: 'alert-warning', timeout: 4000});
  this.showPrice = false;
}
// supprimer le client
deleteProduct(id: string){
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this.productService.deleteProduct(id);
      this.flashMessage.show('Product deleted', {scssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/home-user']);
      Swal.fire({
        title: 'Deleted',
         text: 'this product is deleted',
         icon: 'success',
         timer: 3000
      });
    } 
  });
}

}


