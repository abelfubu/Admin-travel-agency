import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBgImg]',
})
export class BgImgDirective implements OnChanges {
  @Input() appBgImg: string;
  c = this.el.nativeElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.renderer.setStyle(this.c, 'mix-blend-mode', 'luminosity');
    this.renderer.setStyle(this.c, 'color', 'white');
    this.renderer.setStyle(this.c.parentElement, 'background-color', '#232323');
    this.renderer.setStyle(this.c, 'background-image', `url(${this.appBgImg})`);
    this.renderer.setStyle(this.c, 'background-size', 'cover');
    this.renderer.setStyle(this.c, 'background-position', 'center');
  }
}
