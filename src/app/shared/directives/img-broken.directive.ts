import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handlError():void {
    const elementNative = this.elhost.nativeElement;
    elementNative.src = 'https://www.trecebits.com/wp-content/uploads/2020/08/Google-frecuencia-6-GHz.jpg'
  }


  constructor(private elhost: ElementRef) {

  }

}
