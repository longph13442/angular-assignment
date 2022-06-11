import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products : TypeProducts[];
  constructor(private productSevice : ProductsService) { 
    this.products=[]
  }

  ngOnInit(): void {
    this.onGetlist();
  }
  onGetlist(){
    this.productSevice.getProducts().subscribe((data)=>{
      this.products= data
    })
  }
  onRemove(id:any){
    const confirm= window.confirm("Do you want remove ?");
    if(confirm && id){
      this.productSevice.removeProduct(id).subscribe((data)=>{
        this.onGetlist();
      })
    }
  }

}
