import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  showEmpPage = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToProjectPage(){
    // this.showEmpPage = 2;
    this.router.navigate(['/projectlist']);
  } 
  goToEmpPage(){
    // this.showEmpPage = 1;
    this.router.navigate(['/FirstComponentComponent']);
  }
  goToRegPage(){
    // this.showEmpPage = 3;
    this.router.navigate(['/empReg']);
  }

}
