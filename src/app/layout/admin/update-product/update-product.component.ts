import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  dataUpdate: TypeProducts;
  adminForm: FormGroup;
  id:any;
  constructor(private productSevice : ProductsService,
              private router: Router,
              private activate : ActivatedRoute,
              private toast : ToastrService) {
    this.dataUpdate={
      _id:'',
      name: '',
      price:0,
      img:'',
      desc:''
    }
    this.id="",
    this.adminForm = new FormGroup({
      name : new FormControl('', Validators.required),
      price : new FormControl('', Validators.required),
      img : new FormControl('', Validators.required),
      desc : new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
    this.ongetList();
  }
  ongetList(){
    this.id = this.activate.snapshot.params['id']
    if(this.id){
      this.productSevice.getProduct(this.id).subscribe((data)=>{
        this.dataUpdate = data,
        this.adminForm.patchValue(data)
      })
    }
    
  }
  onSubmit(){
    const formData= this.adminForm.value;
    this.productSevice.updateProduct(this.id,formData).subscribe((data)=>{
      this.router.navigateByUrl("/admin")
      this.toast.success("Update product success !")
    })
  }

}
