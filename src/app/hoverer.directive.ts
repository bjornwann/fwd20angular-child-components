import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverer]',
})
export class HovererDirective {
  @HostBinding('style.background') backgroundColor: string;

  constructor() {}

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'none';
  }
}
