import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  headers = ["Name", "Location", "Mail", "Mobile"];
  rows:any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/clientDetails.json").subscribe((data: any) => {
      if(data.length > 0){
        this.rows = data;
      }
    });
  }

}
