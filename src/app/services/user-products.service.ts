import { Injectable } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProductsService {
// mes variables
productsCollection: AngularFirestoreCollection<ProductModule>;
productsDoc: AngularFirestoreDocument<ProductModule>;
products: Observable<ProductModule[]>;
product: ProductModule;
authClient: any;
user: string;
// mon constrocteur 
constructor( private afs: AngularFirestore ) { 
  this.productsCollection = this.afs.collection('products');  
}
// fonction qui récupére la liste de mes cliens 
getProducts(user: string): Observable<ProductModule[]> {
  return this.afs.collection('products', ref => ref.where('user', '==', user))
                .snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as ProductModule;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
}
// ajouter un clein 
newProduct(product: ProductModule){
  this.productsCollection.add( product );
}
// recupere un seul client
getProduct(id: string): Observable<ProductModule>{
   return this.productsCollection.doc(id).valueChanges();
}
// update client 
updateProduct(product: ProductModule){
  this.productsDoc = this.productsCollection.doc(product.id);
  this.productsDoc.update(product);
}
// supprimer un client
deleteProduct(id: string){
  this.productsDoc = this.productsCollection.doc(id);
  this.productsDoc.delete();
}
}
