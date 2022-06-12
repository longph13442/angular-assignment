import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { TypeCart, TypeCarts, TypeProducts } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : TypeCarts[]
 
  constructor(private productSevice : ProductsService) {
    this.cart=[]
    
   }

  ngOnInit(): void {
    this.onGetlist();
  }
  onGetlist(){
    this.cart=  JSON.parse(localStorage.getItem('cart') || '[]');
  }
  onRemove(id:any){
    window.confirm("do you want remove ?")    
  }

}
