import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { Emp } from '../emp';
import { SharedServices } from '../common/shared.service';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
  userForm: any;
  selection={};
  gender = null;
  headers = ["Name","Email","Mobile","Gender","Country","Age"];
  empData = [];
  empsObj: any = {};
  emps: Emp[] = [];
  comp1Val: any = "";

  constructor(private formBuilder: FormBuilder,private sharedService: SharedServices) {
    // this.sharedService.comp2Val = "Component 2 initial value";
   }

   ngAfterContentInit() {
    // console.log(this.emps,'YYYYYYY')
    this.comp1Val = this.sharedService.comp1Val;
    console.log(this.sharedService.comp1Val,'this.sharedService.comp1Val');
    this.emps.push(this.comp1Val);
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      Age: ['',[Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Gender: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      Country: ['', [Validators.required]]
    });  
  }
  
  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm,'this.userForm');
      this.empsObj = Object.assign({}, this.userForm.value);
      this.emps.push(this.empsObj);
      this.userForm.reset();
      alert('Form is valid!!');
    } else {
      alert('Form is not valid!!')
    }
  }
}
