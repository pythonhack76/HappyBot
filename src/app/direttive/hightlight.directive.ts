import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @Input() appHightlight = ''

  constructor(private element: ElementRef) {


   }
   @HostListener('mouseenter') onMouseEnter(){

    //this.element.nativeElement.style.backgroundColor = 'yellow';
    this.cambiaColore(this.appHightlight)

   }

   @HostListener('mouseleave') onMouseLeave(){

    this.cambiaColore('transparent')

   }

   cambiaColore(colore: string){

    this.element.nativeElement.style.backgroundColor = colore;

   }

  //  siamo in stand-bye
  // cambiaFont(font: string){

    // this.element.nativeElement.style.f
  //  }

}
