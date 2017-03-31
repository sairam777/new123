import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
user:register;

  constructor(private registerService:AppService,private router:Router,
  private _flashMessagesService: FlashMessagesService) {
    this.user={
      email:'',
     username: '',
      password: '',
      cnfpassword:'',
      firstname: '',
      lastname: '',
        contact: undefined,
        dob:undefined
    }


  }
  data;

  ngOnInit() {
  }
registeruser(user){
  if(this.user.password!== this.user.cnfpassword){
    // alert("passwords are mis match");
    this._flashMessagesService.show('Password and Confirm passwords are should match', { cssClass: 'alert-danger', timeout: 4000 })
  }else{
 console.log(user.email)
  this.registerService.url="users/register";
  this.registerService.data=this.user;
  this.registerService.postService().subscribe(res=>{
    this.data=JSON.parse(res["_body"]);
    console.log(this.data);
    // console.log(this.data["code"]);

    if(this.data == 0){
       this._flashMessagesService.show('User Already exits please try with another Email', { cssClass: 'alert-danger', timeout: 5000 })
    //alert("User Already exits please try with another Email")
             this.router.navigate(["register"]);
    }else if(this.data["code"] == 1){
       alert("Successfully registered")
             this.router.navigate(["/"]);
    }
  })
  }



}
}


export class register{
email: String;
    username: String;
    password: String;
    firstname: String;
    lastname: String;
    contact: Number;
    dob: Date;
    cnfpassword:String;

}
