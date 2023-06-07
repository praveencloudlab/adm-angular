import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductformComponent } from './productform/productform.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'product-list',component:ProductListComponent },
  { path:'cart',component:CartComponent },
  { path:'checkout',component:CheckoutComponent },
  { path:'add-product',component:ProductformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
