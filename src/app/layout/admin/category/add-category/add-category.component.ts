import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  adminForm: FormGroup;
  constructor(private categorySevice : CategoryService,
              private router: Router,
              private toastr : ToastrService) {
    this.adminForm = new FormGroup({
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const formData= this.adminForm.value;
    this.categorySevice.addCategory(formData).subscribe((data)=>{
      this.router.navigateByUrl("/admin/category")
      this.toastr.success("Add catgory success !")
    })
  }

}
