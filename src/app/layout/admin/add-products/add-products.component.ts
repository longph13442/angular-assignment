import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  adminForm: FormGroup;
  constructor(private productSevice : ProductsService,
              private router: Router,
              private toastr : ToastrService) {
    this.adminForm = new FormGroup({
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
      price : new FormControl('',[
        Validators.required,
        Validators.min(6),
        Validators.max(100)
      ]),
      img : new FormControl('', Validators.required),
      desc : new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const formData= this.adminForm.value;
    this.productSevice.creatProduct(formData).subscribe((data)=>{
      this.router.navigateByUrl("/admin")
      this.toastr.success("Add products success !")
    })
  }

}
