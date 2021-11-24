import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userProfile: any | undefined;
  @Input() currentUserId: any | undefined;

  @Output() showProfileValue = new EventEmitter<string>();
 

  userInfo = [];
  ShowProfile = false;
  id = 0;
  username = localStorage.getItem('username');
  constructor( private router:Router,private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userProfile.forEach((element: any) => {
      if(element.Id === this.currentUserId ){
        console.log(element,'element')
        this.userInfo = element;
      }
    });
    // this.route.params.subscribe(event => {
    //   this.id = event.id;
    //   console.log(this.id,'id')
    //   // this.httpClient.get("assets/data/empDetails.json").subscribe((data: any) => {
    //     // if(data.length > 0){
    //         // this.userInfo = user.find((item: { Id: number; }) => item.Id === this.id)
    //     // }
    //   // });
    //   });
    //  });
  }

  backToDetails() {
    console.log('HHHHHHHHHHHH')
    // this.router.navigate(['/FirstComponentComponent']);
    this.showProfileValue.emit("true");
  };

}
