import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from './../../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  email:string;
  pwd:string;
user:loginInterface;
data;
  constructor(private router:Router,
  private loginService:AppService,
   private _flashMessagesService: FlashMessagesService) {
    this.user={
      email:'',
      pwd:''
    }
   }

  ngOnInit() {
    // this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 2000 });
  }

registerFunction(){

  this.router.navigate(["register"]);
}
forgotFunction(){
   this.router.navigate(["forgotpassword"]);
}

loginFunction(user){

this.loginService.url="users/login";
this.loginService.data=user;
this.loginService.postService().subscribe(res=>{
  this.data=res['_body'];
  if(this.data==0){
    this._flashMessagesService.show('Please fill all fields....!', { cssClass: 'alert-danger', timeout: 1000 })
  }else if(this.data==2){
    this.router.navigate(["welcome"]);
  }else if(this.data==1){
     this._flashMessagesService.show("Invalid User name or password", { cssClass: 'alert-danger', timeout: 1000 })


  }
});
}
}




export class loginInterface{
  email:String;
  pwd:String;
}
