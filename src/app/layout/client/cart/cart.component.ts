import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
 
  constructor(private productSevice : ProductsService,
              private toast : ToastrService) {
    this.cart=[]
    
   }

  ngOnInit(): void {
    this.onGetlist();
  }
  onGetlist(){
    this.cart=  JSON.parse(localStorage.getItem('cart') || '[]');
  }
  onRemove(id:any){
    const cartItem = JSON.parse(localStorage.getItem('cart') || '[]');
    const confirm= window.confirm("do you want remove ?")    
    if(confirm && id){
      
      const cartitem= cartItem.filter((item:any)=>item._id!=id)
      localStorage.setItem('cart', JSON.stringify(cartitem));
      this.onGetlist();
      this.toast.success("Remove success !")
    }
  }

}
