import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  // username: string | undefined;
  username = localStorage.getItem('username');

  constructor( private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    console.log(this.username,'ss')
  }
  // logOut() {
  //     localStorage.clear();
  //     Swal.fire({
  //       title: 'Do you want to logout?',
  //       showDenyButton: true,
  //       showCancelButton: false,
  //       confirmButtonText: `Yes`,
  //       denyButtonText: `No`,
  //     }).then((result) => { 
  //       if (result.isConfirmed) {
  //         Swal.fire('Logged out Successfully!', '', 'success');
  //         this.router.navigate(['/login']);
  //       } else if (result.isDenied) {
  //         Swal.fire('You are still logged in', '', 'info')
  //       }
  //     })
  //     console.log(this.username,'ss')
  // }

  // goToUserInfo(id: any){
  //   this.router.navigate(['/userinfo:'+id]);
  // }

}
