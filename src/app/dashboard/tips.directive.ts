import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Directive({
  selector: '[appTips]'
})
export class TipsDirective implements OnInit {

  @Input() tips: string;
   
  constructor(private el: ElementRef) { }

  ngOnInit(){
    
    this.handleTimeTips(this.tips);
  
  }
  
  handleTimeTips(tips){
    
      setTimeout(()=>{
        let rand = Math.random();
        let totalTips = tips.length;
        let randIndex = Math.floor(rand*totalTips);
        let randomTip = tips[randIndex];
        this.el.nativeElement.innerHTML = randomTip;
        this.handleTimeTips(this.tips);
      }, 4000)
    
  }








/*
  private cambiarEstilo(estilo: string) {
    this.el.nativeElement.style.display = estilo;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiarEstilo('none');
    console.log("entre")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiarEstilo('flex');
    console.log("salí")
  }



  @HostListener('mousedown') onMouseDown(){
    this.ocultarDiv()
  }

  ocultarDiv(){
    var divActual= document.getElementById('div-prueba');
    divActual.style.display = "block";
    console.log("di click")
  }

  */





}
