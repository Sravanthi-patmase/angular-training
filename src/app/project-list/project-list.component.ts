import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from "chart.js";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from '@angular/common/http';
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";
import { fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: any = [] ;
  public barChartType: any;
  public barChartLegend: any;
  public barChartData: any ;
  labels: any = [];
  data1: any = [];

  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    }
   ]

  constructor( private httpClient: HttpClient ) { }
  rows = [];
  chartReady: any = false;

  nums = of(1, 2, 3);
  squareValues = map((val: number) => val * val);
    squaredNums  = this.squareValues(this.nums);

  ngOnInit(): void {

    // this.barChartLabels = ['NSF', 'DX', 'HTC','Ciber'];
    // this.barChartType = 'bar';
    // this.barChartLegend = true;
    // this.barChartData = [
    //   {data: [9, 10, 11, 13], label: 'No. Of Employees'},
    // ];
    // this.chartReady = true;
    this.squaredNums.subscribe((x:any) => console.log(x));
    console.log("WWWWWWWWWWWW")
    interval(1000)
      .pipe(
        take(3),
        map(v => Date.now())
      )
      .subscribe(value => console.log("Subscriber: " + value));

    this.httpClient.get("assets/data/projectDetails.json").subscribe((data: any) => {
      if(data.projects.length > 0){
        data.projects.forEach((element:any) => {
            this.labels.push(element.P_Name);
            this.data1.push(element.EmpCount)
        });
        setTimeout(() => {
          this.barChartLabels = this.labels;
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartData = [
            {data:this.data1, label: 'No. Of Employees'},
          ];
          this.chartReady = true;
        }, 2000);
      }
    });
}

onChartClick(event : any) {
  console.log(event);
}
}
