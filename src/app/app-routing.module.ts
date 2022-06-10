import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './layout/client/cart/cart.component';
import { ClientComponent } from './layout/client/client.component';
import { HomePageComponent } from './layout/client/home-page/home-page.component';
import { ProductDetailPageComponent } from './layout/client/product-detail-page/product-detail-page.component';
import { SignupComponent } from './layout/client/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children:[
      {
        path: '',
        component:HomePageComponent
      },
      {
        path:"productdetail/:id",
        component: ProductDetailPageComponent
      },
      {
        path:'cart',
        component: CartComponent
      }
    ]
  },
  {
    path:'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
