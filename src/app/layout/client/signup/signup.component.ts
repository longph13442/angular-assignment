import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private userservice: UserService,
              private router: Router,
              private toastr :ToastrService) {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      password: new FormControl(''),
      role:new FormControl(0)
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const signupData= this.signupForm.value;
    return this.userservice.signup(signupData).subscribe((data)=>{
      localStorage.setItem('User',JSON.stringify(data))
     this.toastr.success("Sign up  successfully !")
      // setTimeout(()=>  )
      this.router.navigateByUrl('/signin')
    })

  }
}
