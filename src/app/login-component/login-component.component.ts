import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  IsInvalidUser = false;
  loginData: any = [];
  constructor(private router:Router,private httpClient: HttpClient, private route: ActivatedRoute,) { 
  }

  ngOnInit(): void {
  }
  
  loginFun(  username:string, password:string){
    this.httpClient.get("assets/data/loginDetails.json").subscribe((data: any) => {
        if(data.length > 0){
          data.forEach((obj: any)=>{
            console.log(username,obj,'TTTTTTTTTTTTT')
            if(username ==  obj.name  && password == obj.password && !this.IsInvalidUser) {
                console.log('LLLLLL')
                this.loginData.push(obj);
                localStorage.setItem("username",username);
            }
            // else{
            //   console.log("nnnnnnn")
            //   this.IsInvalidUser = true;
            // }
          });
          if(this.loginData.length > 0){
            this.router.navigate(['/FirstComponentComponent']);
          }else{
            this.IsInvalidUser = true;
            username = "";
            password = "";
          }
        }
    })
  }

  onSearchChange(){
    // this.IsInvalidUser = false;
  }

}
