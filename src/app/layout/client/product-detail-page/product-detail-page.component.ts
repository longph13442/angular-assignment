import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/TypeProducts';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  products: TypeProducts;
  id: string;
  cartValue: number
  constructor(private activateRoute: ActivatedRoute, // lấy id từ url
    private productSevices: ProductsService, // gọi câu lệnh
    private toastr: ToastrService, // thông báo
    private local: LocalStorageService, // localstorage
    private router: Router // điều hướng
  ) {
    this.id = "";
    this.products = {
      _id: "",
      name: "",
      price: 0,
      img: "",
      desc: ""
    }
    this.cartValue = 1
  }

  ngOnInit(): void {

    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.productSevices.getProduct(this.id).subscribe((data) => {
        this.products = data;
      })
    }

  }
  onChange(event: any) {
    this.cartValue = event.target.value;
  }
  onSubmit() {
    console.log("abc");

    const addItem = {
      ...this.products,
      value: +this.cartValue,
    }
    // localStorage
    this.local.setItem(addItem)
    this.cartValue = 1;
    this.toastr.success("add to cart success !")
    this.router.navigateByUrl("/cart")
  }


}
