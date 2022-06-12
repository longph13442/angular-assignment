import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { TypeUser } from 'src/app/type/TypeUser';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  user: TypeUser[];
  constructor(private userSevice : UserService,
              private toastr : ToastrService) { 
    this.user=[]
  }

  ngOnInit(): void {
    this.onGetlist();
  }
  onGetlist(){
    this.userSevice.getUser().subscribe((data)=>{
      this.user= data
    })
  }
  onRemove(_id:any){
    const confirm= window.confirm("Do you want remove ?");
    if(confirm && _id){
      this.userSevice.removeUser(_id).subscribe((data)=>{
        this.onGetlist();
        this.toastr.success("Remove success !")
      })
    }
  }

}
