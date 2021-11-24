import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router  } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';
  constructor(private httpClient: HttpClient, private router:Router){}
  isShow=false;
  showHide(event: any){
    console.log(this.router.url,'this.router.url')
      if(this.router.url !== "/login") {this.isShow=true}
      else{ this.isShow=false};
  }
  ngOnInit(){
  }
  goToProjectPage(){
    this.router.navigate(['/projectlist']);
  } 
  goToEmpPage(){
    this.router.navigate(['/FirstComponentComponent']);
  }
  goToRegPage(){
    this.router.navigate(['/empReg']);
  }
  
}
