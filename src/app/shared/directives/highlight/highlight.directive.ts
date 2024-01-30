import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightColor]'
})
export class HighlightDirective {

  constructor(private readonly elementRef: ElementRef) { }

  @Input() highlightColor: string | null | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightColor && this.hightlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight('');
  }

  private hightlight(color: string) {
    this.elementRef.nativeElement.style.background = color;
  }

}
