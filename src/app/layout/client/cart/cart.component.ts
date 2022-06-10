import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { TypeProducts } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : TypeProducts[]
  constructor(private cartsevice: CartService) {
    this.cart=[]
   }

  ngOnInit(): void {
    this.onGetlist();
  }
  onGetlist(){
    this.cartsevice.getlist().subscribe((data)=>{
      this.cart=data
    })
  }

}
