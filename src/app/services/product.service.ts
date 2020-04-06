import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { ProductModule } from '../models/product/product.module';

import 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // mes variables
  productsCollection: AngularFirestoreCollection<ProductModule>;
  productsDoc: AngularFirestoreDocument<ProductModule>;
  products: Observable<ProductModule[]>;
  product: ProductModule[];
  authClient: any;
  user: string;

  constructor( private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection('products');

   }
// fonction qui récupére la liste de mes produit 
getProducts(): Observable<ProductModule[]> {
  return this.afs.collection('products')
                .snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as ProductModule;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
}
 // recupere un seul produit
 getProduct(id: string): Observable<ProductModule>{
  return this.productsCollection.doc(id).valueChanges();
  
}
}
