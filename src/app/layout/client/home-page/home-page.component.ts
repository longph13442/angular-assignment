import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { TypeCategory, TypeProducts } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: TypeProducts[];
  category: TypeCategory[];
  constructor(private productsSevice: ProductsService,
               private categorySevice : CategoryService) { 
    this.products= [],
    this.category=[]
  }

  

  ngOnInit(): void {
    this.onGetlist();
    this.onGetCategory();
  }
  onGetlist(){
    this.productsSevice.getProducts().subscribe((data)=>{
      this.products=data
    })
  }
  onGetCategory(){
    this.categorySevice.getCategory().subscribe((data)=>{
      this.category= data
    })
  }

}
