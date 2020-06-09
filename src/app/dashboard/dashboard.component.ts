import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';  
import { Router } from '@angular/router';  
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { TipsDirective } from 'src/app/dashboard/tips.directive';

@Component({  
    selector: 'app-dashboard',  
    templateUrl: './dashboard.component.html',  
    styleUrls: ['./dashboard.component.css']  
  })  
  export class DashboardComponent   {  
    optionSelected: any = 'paredes';
    /*
    paredes: boolean = true;
    puertas: boolean;
    mesas: boolean;
    sillas: boolean;
    cubiculos: boolean;
    show: boolean= true;*/
    tipsList = ['Recuerda que antes de realizar esta distribución de planta debes tener clara la información mostrada acerca del método SLP para que puedas realizarlo de la mejor manera :D',
    'Recuerda estos tres parámetros 1. Relaciones: indica el grado relativo de proximidad deseado o requerido entre máquinas, departamentos o áreas en cuestión. 2. Espacio: determinado por la cantidad, clase y forma o configuración de los equipos a distribuir. 3. Ajuste: arreglo físico de los equipos, maquinaria y servicios, en condiciones reales.',
    'Analiza y divide bien las áreas de la planta.', 'Distribuye de la mejor manera los materiales y máquinas siguiendo las fases del modelo SLP.', 
      'El método SPL incorpora el flujo de materiales en el estudio de distribución, organizando el proceso de planificación total de manera racional y estableciendo una serie de fases y técnicas que permiten identificar, valorar y visualizar todos los elementos involucrados en la implantación y las relaciones existentes entre ellos.',
      'Te recomendamos realizar varias soluciones en una hoja y después de analizarlas plantee la que consideres mejor.'];
    estiloDisplay: 'none';
    cv: any; cx: any;
    objetos: any; objetoActual = null;
    inicioX = 0; inicioY = 0; 

    @ViewChild('clone') template: TemplateRef<any>;

    // Where to insert the cloned content
    @ViewChild('container', {read:ViewContainerRef}) container;

    selectorParedes = document.querySelector('#option-paredes');
    constructor(private viewContainerRef: ViewContainerRef) { }  
    
    ngOnInit():void{
        //this.cargar();
        //this.dragStart(event);
        //this.allowDrop(event);
        //this.drop(event);
        
        }
        
        
      dragStart(event) {
          event.dataTransfer.setData("text", event.target.id);
          console.log("sirve");
          //document.getElementById("demo").innerHTML = "Started to drag the p element";
        }
      
      
    allowDrop(event) {
        event.preventDefault();
      }
      
    drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
      }

    actualizar(){
      this.cx.fillStyle='#f0f0f0';
      this.cx.fillRect(0, 0, 400, 300);
      for(var i = 0; i < this.objetos.length; i++){
          this.cx.fillStyle = this.objetos[i].color;
          this.cx.fillRect(this.objetos[i].x, this.objetos[i].y, this.objetos[i].width, this.objetos[i].height);
        }
    }
      /*
      cambiarDiv(){
      setTimeout(function() {
          var contenedor1 = document.querySelector("#div1");
          contenedor1.fadeOut(1500);
      },3000);
   
      setTimeout(function() {
        var contenedor2 = document.querySelector('#div2');
        contenedor2.fadeIn(1500);
      },2000);
  }*/


    
      /*
    cargar(){
      this.objetos = [];
      this.cv = document.getElementById('lienzo');
      this.cx = this.cv.getContext('2d');
      this.objetos.push({
          x:2, y: 2,    
          width: 100, height:200,
          color: '#00f'
      })
      this.objetos.push({
          x:300, y: 150,
          width: 50, height:100,
          color: '#f00'
      })
      this.actualizar();
      this.cv.onmousedown = (event)=>{
          console.log("entre", this.objetos);
          for(var i = 0; i < this.objetos.length; i++){
          if(this.objetos[i].x < ((event.clientX)-487.15)
              && (this.objetos[i].width + this.objetos[i].x> ((event.clientX)-487.15))
              && this.objetos[i].y < ((event.clientY)-81)
              && (this.objetos[i].height + this.objetos[i].y> ((event.clientY)-81))){
                  this.objetoActual = this.objetos[i];
                  this.inicioY = event.clientY - this.objetos[i].y;
                  this.inicioX = event.clientX - this.objetos[i].x
                  break;
              }
          }                
      }
      this.cv.onmousemove = (event)=>{
          if(this.objetoActual != null){
              this.objetoActual.x = event.clientX - this.inicioX;
              this.objetoActual.y = event.clientY - this.inicioY ;
              this.actualizar();
          }   
      };
      this.cv.onmouseup = (event)=>{
          this.objetoActual = null;
      }
    }

    onMouseDown(){
      console.log("down");
     }
     */
}