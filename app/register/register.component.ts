import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User(); 
  userCPassword:string;
  constructor(private service:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  checkRegister(registerationForm: NgForm) {
    if (this.user.password != this.userCPassword) {
      alert("Password is not matching")
    }
    else if (registerationForm.valid) {
      // alert(JSON.stringify(registerationForm.value));
      // console.log(this.user); //obj will be sent to server thru Api calls
      this.service.registerUser(this.user).subscribe(
        userPersisted => {
          console.log(userPersisted);
        }
      );
    }
    else {
      alert("Please enter correct information.");
    }
  }
}