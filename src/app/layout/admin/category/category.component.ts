import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { TypeCategory } from 'src/app/type/TypeProducts';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: TypeCategory[];
  constructor(private categorySevice : CategoryService,
              private toastr : ToastrService) { 
    this.category=[]
  }

  ngOnInit(): void {
    this.onGetlist();
  }
  onGetlist(){
    this.categorySevice.getCategory().subscribe((data)=>{
      this.category= data
    })
  }
  onRemove(_id:any){
    console.log(_id);
    
    const confirm= window.confirm("Do you want remove ?");
    if(confirm && _id){
      this.categorySevice.removeCategory(_id).subscribe((data)=>{
        this.onGetlist();
        this.toastr.success("Remove success !")
      })
    }
  }

}
