import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { TypeCategory } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  dataUpdate: TypeCategory;
  adminForm: FormGroup;
  id:any;
  constructor(private categorySevice : CategoryService,
              private router: Router,
              private activate : ActivatedRoute,
              private toast : ToastrService) {
    this.dataUpdate={
      _id:'',
      name: ''
    }
    this.id="",
    this.adminForm = new FormGroup({
      id: new FormControl('',Validators.required),
      name : new FormControl('', Validators.required)
     
    })
   }

  ngOnInit(): void {
    this.ongetList();
  }
  ongetList(){
    this.id = this.activate.snapshot.params['id']
    if(this.id){
      this.categorySevice.getaCategory(this.id).subscribe((data)=>{
        this.dataUpdate = data,
        this.adminForm.patchValue(data)
      })
    }
    
  }
  onSubmit(){
    const formData= this.adminForm.value;
    this.categorySevice.editCategory(this.id,formData).subscribe((data)=>{
      this.router.navigateByUrl("/admin/category")
      this.toast.success("Update category success !")
    })
  }

}
