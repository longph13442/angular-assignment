import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: TypeProducts[];
  constructor(private productsSevice: ProductsService) { 
    this.products= []
  }

  

  ngOnInit(): void {
    this.onGetlist();
  }
  onGetlist(){
    this.productsSevice.getProducts().subscribe((data)=>{
      this.products=data
    })
  }

}
