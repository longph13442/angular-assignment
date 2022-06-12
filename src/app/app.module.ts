import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { HomePageComponent } from './layout/client/home-page/home-page.component';
import { ProductDetailPageComponent } from './layout/client/product-detail-page/product-detail-page.component';
import { CartComponent } from './layout/client/cart/cart.component';
import { SignupComponent } from './layout/client/signup/signup.component';
import { SigninComponent } from './layout/client/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './layout/admin/dashboard/dashboard.component';
//form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './layout/admin/add-products/add-products.component';
import { UpdateProductComponent } from './layout/admin/update-product/update-product.component';
import { ListUserComponent } from './layout/admin/list-user/list-user.component';
import { EditUserComponent } from './layout/admin/edit-user/edit-user.component';
import { UpdateUserComponent } from './layout/admin/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClientComponent,
    AdminComponent,
    HomePageComponent,
    ProductDetailPageComponent,
    CartComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    AddProductsComponent,
    UpdateProductComponent,
    ListUserComponent,
    EditUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
