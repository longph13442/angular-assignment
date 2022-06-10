import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/TypeProducts';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  products: TypeProducts;
  id: string
  constructor(private activateRoute: ActivatedRoute,
    private productSevices: ProductsService,
    private toastr: ToastrService
  ) {
    this.id = "";
    this.products = {
      _id: "",
      name: "",
      price: 0,
      img: "",
      desc: ""
    }
  }

  ngOnInit(): void {

    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.productSevices.getProduct(this.id).subscribe((data) => {
        this.products = data;
      })
    }

  }
  onSubmit() {
    console.log("abc");
    this.toastr.success("add to cart success !")
  }

}
