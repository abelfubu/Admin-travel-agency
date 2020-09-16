import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  element = this.el.nativeElement;
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (window.pageYOffset > this.element.clientHeight) {
      this.renderer.addClass(this.el.nativeElement, 'dark');
      this.element.classList.add('navbar-inverse');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'dark');
    }
  }
}
