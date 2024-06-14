import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  user:User=new User(); 
userCPassword:string;
  constructor( private userservice:UserserviceService){}
 

  ngOnInit(): void {}
  ttm
  
// checkRegister(registerForm: NgForm) {
//   if (this.user.password != this.userCPassword) {
//     alert("Password is not matching")
//   }
//   else if (registerForm.valid) {
//     // alert(JSON.stringify(registerationForm.value));
//     // console.log(this.user); //obj will be sent to server thru Api calls
//     this.userservice.registerUser(this.user).subscribe(
//       userPersisted => {
//         console.log(userPersisted);
//       }
//     );
//   }
//   else {
//     alert("Please enter correct information.");
//   }
// }
// }
checkRegister(registerationForm:NgForm){
  if(registerationForm.valid){
    alert(JSON.stringify(registerationForm.value));
  console.log(this.user); //obj will be sent to server thru Api calls
}
if(this.user.password!=this.userCPassword){
  alert("Password is not matching")
}
else{
  alert("Please enter correct information.");
}

}

}

