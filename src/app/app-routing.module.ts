import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanToAdminGuard } from './guards/can-to-admin.guard';
import { AddProductsComponent } from './layout/admin/add-products/add-products.component';
import { AdminComponent } from './layout/admin/admin.component';
import { CategoryComponent } from './layout/admin/category/category.component';
import { DashboardComponent } from './layout/admin/dashboard/dashboard.component';
import { ListUserComponent } from './layout/admin/list-user/list-user.component';
import { UpdateProductComponent } from './layout/admin/update-product/update-product.component';
import { UpdateUserComponent } from './layout/admin/update-user/update-user.component';
import { CartComponent } from './layout/client/cart/cart.component';
import { ClientComponent } from './layout/client/client.component';
import { HomePageComponent } from './layout/client/home-page/home-page.component';
import { ProductDetailPageComponent } from './layout/client/product-detail-page/product-detail-page.component';
import { SigninComponent } from './layout/client/signin/signin.component';
import { SignupComponent } from './layout/client/signup/signup.component';

const routes: Routes = [
  
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: "productdetail/:id",
        component: ProductDetailPageComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [CanToAdminGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path:'addProducts',
        component: AddProductsComponent
      },
      {
        path:'updateProducts/:id',
        component: UpdateProductComponent
      },
      {
        path:'account',
        component: ListUserComponent
      },
      {
        path:'updateUser/:id',
        component: UpdateUserComponent
      },
      {
        path:'category',
        component: CategoryComponent
      }
    ]
  },

  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
