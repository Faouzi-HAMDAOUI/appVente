import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule } from'@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConditionComponent } from './components/condition/condition.component';
import { AboutComponent } from './components/about/about.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MyProductComponent } from './components/my-product/my-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ConditionComponent,
    AboutComponent,
    HomeUserComponent,
    NotFoundComponent,
    ProfilComponent,
    AddProductComponent,
    MyProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FlashMessagesModule.forRoot(),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
