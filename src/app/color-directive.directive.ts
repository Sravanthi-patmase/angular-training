import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  constructor(elementRef: ElementRef) { 
    elementRef.nativeElement.style.color = "Green"
    elementRef.nativeElement.style.backgroundColor = "pink"
    elementRef.nativeElement.style.position = "absolute"
    elementRef.nativeElement.style.top = "51px"
    elementRef.nativeElement.style.right = "0"
    elementRef.nativeElement.style.padding = "5px 2px -1px;"
  }

}
