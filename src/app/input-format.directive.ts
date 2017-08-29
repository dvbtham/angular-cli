import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input("appInputFormat") format;
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowerCase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
  constructor(private el:ElementRef) {
    
   }
    
}
