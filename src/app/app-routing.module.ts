import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ConditionComponent } from './components/condition/condition.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { ProfilComponent } from './components/profil/profil.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MyProductComponent } from './components/my-product/my-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'condition', component: ConditionComponent},
  {path: 'home-user', component: HomeUserComponent, canActivate: [AuthGuardGuard]},
  {path: 'profil', component: ProfilComponent, canActivate: [AuthGuardGuard]},
  {path: 'newProduct', component: AddProductComponent, canActivate: [AuthGuardGuard]},
  {path: 'my-product/:id', component: MyProductComponent, canActivate: [AuthGuardGuard]},
  {path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
