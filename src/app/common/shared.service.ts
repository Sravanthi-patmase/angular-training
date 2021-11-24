import { Injectable } from '@angular/core';
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { BehaviorSubject } from 'rxjs';
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";
import { fromEvent, of } from 'rxjs';

@Injectable()

export class SharedServices {

    comp1Val: any;
    _comp1ValueBS = new BehaviorSubject<string>('');
    el = document.getElementById('my-element')!;
    mouseMoves = fromEvent<MouseEvent>(this.el, 'mousemove');
    nums = of(1, 2, 3);

    squareValues = map((val: number) => val * val);
    squaredNums  = this.squareValues(this.nums);



    // comp2Val: any;
    // _comp2ValueBS = new BehaviorSubject<string>('');

    constructor() {
        this.comp1Val = {};
        // this.comp2Val = "";
    
        this._comp1ValueBS.next(this.comp1Val);
        // this._comp2ValueBS.next(this.comp2Val);
      }
    
      updateComp1Val(val:any) {
        console.log(val,'MMMMMMMMMMMMMM')
        this.comp1Val = val;
        this._comp1ValueBS.next(this.comp1Val);
      }
    
    //   updateComp2Val(val: any) {
    //     this.comp2Val = val;
    //     this._comp2ValueBS.next(this.comp2Val);
    //   }
    ngOnInit() {
    this.squaredNums.subscribe((x:any) => console.log(x));
        console.log("WWWWWWWWWWWW")
        interval(1000)
          .pipe(
            take(3),
            map(v => Date.now())
          )
          .subscribe(value => console.log("Subscriber: " + value));
    
        /*
      const middleware = pipe(
        take(3),
        map(v => Date.now())
      );
    
      interval(1000)
        .pipe(middleware)
        .subscribe(value => console.log("Subscriber: " + value));
        */
      }
    //   subscription = this.mouseMoves.subscribe(evt => {
    //     // Log coords of mouse movements
    //     console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      
    //     // When the mouse is over the upper-left of the screen,
    //     // unsubscribe to stop listening for mouse movements
    //     if (evt.clientX < 40 && evt.clientY < 40) {
    //       this.subscription.unsubscribe();
    //     }
    //   });
}