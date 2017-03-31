import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
user:any;
data;

constructor(private forgotService:AppService,private router:Router) {
this.user ={
  email:""
}
  }

  ngOnInit() {
  }
sendMail(user){
  console.log(user);
this.forgotService.url="users/forgotpassword";
this.forgotService.data={
  email:user.email
}
this.forgotService.postService().subscribe(res=>{
this.data=res["_body"]
if(this.data == 1){
    alert("Please enter valid Email..");

}
else if(this.data == 0){
    alert("Password Sent Successfullly..")
             this.router.navigate(["/"]);
}
});

}
}
