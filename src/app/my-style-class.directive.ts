import { Directive, HostBinding, HostListener } from '@angular/core';
import { Condition } from 'selenium-webdriver';

@Directive({
  selector: '[appMyStyleClass]'
})
export class MyStyleClassDirective {
@HostBinding('class.myStyle') Condition: boolean;
  constructor() { }

@HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
  this.Condition = true;
}

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.Condition = false;
  }
}
