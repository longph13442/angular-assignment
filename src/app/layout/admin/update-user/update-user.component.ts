import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { TypeUser } from 'src/app/type/TypeUser';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  dataUpdate: TypeUser;
  adminForm: FormGroup;
  _id:any;
  constructor(private userSevice : UserService,
              private router: Router,
              private activate : ActivatedRoute,
              private toast : ToastrService) {
    this.dataUpdate={
      _id:'',
      name: '',
      email:'',
      password:'',
      role:0
    }
    this._id="",
    this.adminForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      role : new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.ongetList();
  }
  ongetList(){
    this._id = this.activate.snapshot.params['id']
    
    if(this._id){
      this.userSevice.getaUser(this._id).subscribe((data)=>{
        this.dataUpdate = data,
        this.adminForm.patchValue(data)
      })
    }
    console.log(this.dataUpdate);
    
    
  }
  onSubmit(){
    const formData= this.adminForm.value;
    this.userSevice.editUser(this._id,formData).subscribe((data)=>{
      this.toast.success("Edits user success !")
      this.router.navigateByUrl("/admin/account")
    })
  }

}
