import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  username:any = "";
  constructor( private router:Router ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
  logOut() {
    localStorage.clear();
    Swal.fire({
      title: 'Do you want to logout?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => { 
      if (result.isConfirmed) {
        Swal.fire('Logged out Successfully!', '', 'success');
        this.router.navigate(['/login']);
      } else if (result.isDenied) {
        Swal.fire('You are still logged in', '', 'info')
      }
    })
    console.log(this.username,'ss')
}

}
