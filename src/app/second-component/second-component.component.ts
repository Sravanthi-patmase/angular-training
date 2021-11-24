import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';
// import { SweetAlertService } from 'ngx-sweetalert2';
import { Emp } from "../emp";
import { SharedServices } from "../common/shared.service";
import { LoginService } from '../common/login.service';


@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent implements OnInit {

  headers = ["Name", "Email", "Mobile", "Age", "Gender", "Country","actions"];
  rows = [];
  swalData:any = [];
  p: number = 1;
  id: number = 0;
  User_id : number = 0;
  ShowProfile = false;
  searchedKeyword: string = "";
  public searchFilter: any = '';
  emps: Emp[] = [];
  htmlContent = "";

  constructor(public loginService: LoginService,private httpClient: HttpClient,private router:Router,private sharedService: SharedServices) { 
    this.sharedService.comp1Val = "Component 1 initial value";
  }

  ngOnInit(): void {
    this.httpClient.get("assets/data/empDetails.json").subscribe((data: any) => {
      if(data.length > 0){
        this.rows = data;
      }
    });
  }
  addValueToEmpReg(emp: any){
    // this.sharedService.updateComp1Val(emp);
    Swal.fire({
      title: 'Are you sure you want to add this Employee to Registration Table?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => { 
      if (result.isConfirmed) {
        // Swal.fire('Added Successfully', '', 'success');
        this.rows.forEach((e: any ) => {
          if(e.Id == emp){
            console.log(e.Id,'ID',emp);
            this.sharedService.updateComp1Val(e);
            this.router.navigate(["/empReg"])
          }
        })
      }
    })
  }

  addToDB(emp: any){
    // this.sharedService.updateComp1Val(emp);
    Swal.fire({
      title: 'Are you sure you want to add this Employee to DB?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => { 
      if (result.isConfirmed) {
        // Swal.fire('Added Successfully', '', 'success');
        this.rows.forEach((e: any ) => {
          if(e.Id == emp){
            console.log(e.Id,'ID',emp);

            this.loginService.login({}).subscribe(data => {
              console.log(data);
            });
            
          }
        })
      }
    })
  }

  goToUserInfo(id: any){
    this.ShowProfile = true;
    this.User_id = id;
    // this.router.navigate(['/userinfo:'+id]);
  }

  deleteUser(id: any){
    Swal.fire({
      title: 'Are you sure you want to delete the user?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => { 
      if (result.isConfirmed) {
        Swal.fire('Deleted Successfully', '', 'success');
        this.rows.forEach((e: any,index ) => {
          if(e.Id == id){
            console.log(e.Id,'ID',id)
            this.rows.splice(index,1);
          }
        })
      }
    })
  }

  backBtn(e:any){
    this.ShowProfile = false;
  }

  viewUser(id: any){ 
    this.emps = [];
    this.rows.forEach((element: any) => {
      if(element.Id === id ){
        this.swalData = element;
      }
    });
    this.emps.push(this.swalData);
    console.log(this.swalData,'swal',this.emps);
    this.htmlContent = "";
    // this.htmlContent = '<table  class="table-striped border-success center" >'
    for (let x in this.emps) {
      this.htmlContent += "<label>Name: " + this.emps[x].Name + "</label><br>";
      this.htmlContent += "<label>Email: " + this.emps[x].Email + "</label><br>";
      this.htmlContent += "<label>Age: " + this.emps[x].Age + "</label><br>";
      this.htmlContent += "<label>Mobile: " + this.emps[x].Mobile + "</label><br>";
      this.htmlContent += "<label>Country: " + this.emps[x].Country + "</label><br>";
      this.htmlContent += "<label>Gender: " + this.emps[x].Gender + "</label><br>";
    }
    // this.htmlContent += "</table>"
    console.log(this.htmlContent,'RRRRRRRRRR')
    Swal.fire({
      title: '<strong> View User </strong>',
      html: this.htmlContent ,
      showCloseButton: true,
      // showCancelButton: true,
      focusConfirm: false,
    })
    this.htmlContent = '';
  }

}
