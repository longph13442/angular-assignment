import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Typesignin } from 'src/app/type/TypeUser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm : FormGroup
  constructor(private userSevice : UserService,
              private router : Router,
              private toastr : ToastrService)
               { 
    this.signinForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const signinData = this.signinForm.value;
      this.userSevice.signin(signinData).subscribe((data)=>{
      const check =localStorage.setItem('longin', JSON.stringify(data))
      this.router.navigateByUrl('/admin')
      this.toastr.success("Logged in successfully !")
      return true;
    })
    this.toastr.error("Action fail !")
    return false;
    
  }

}
