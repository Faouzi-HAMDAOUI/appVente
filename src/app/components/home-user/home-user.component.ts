import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { UserProductsService } from 'src/app/services/user-products.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
  products: ProductModule[];
  total = 0;
  searchProducts: ProductModule[];
  constructor(
     private productService: UserProductsService,
     private flashMessage: FlashMessagesService,
     private router: Router,
     private authUser: AuthUserService
     ) { }
  ngOnInit(): void {
      this.authUser.getAuth().subscribe(auth => { 
        this.productService.getProducts(auth.uid).subscribe( products => { // recuperer le listes des cliennt
        this.products = products;
        this.searchProducts = this.products = products;
        // recuperer le ttotal des balance
        this.total = this.getTotal();
     });
    });
  }
  // Afficher le total de mes prix
  getTotal(){
      return this.products.reduce((total, product) => {
      return total + parseFloat(product.price.toString()) ;
    }, 0);
  }
  // supprimer un produit
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
        this.flashMessage.show('Product deleted', {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/']);
        Swal.fire({
           title: 'Deleted',
           text: 'this client is deleted',
           icon: 'success',
           timer: 3000
        });
      } 
    });
}
// recherche un cleint
  search(query: string){
        this.searchProducts = (query) ? this.products.filter(product =>
           product.name.toLowerCase().includes(query.toLowerCase()) ||
           product.mark.toLowerCase().includes(query.toLowerCase()) ) :
             this.products;
}
}
