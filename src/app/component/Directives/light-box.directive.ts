import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
})
export class LightBoxDirective {

  constructor( private eleRef:ElementRef) {
    this.eleRef.nativeElement.style.border="2px solid green"
  }

}
