import { Component, OnInit, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { CanvasURLService } from '../servicio/canvasURL.service';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {

  optionSelected: any = 'paredes';
  cv: any; cx: any;
  objetos: any; objetoActual = null;
  inicioX = 0; inicioY = 0;
  imagesOnCanvas = [];
  tipsList = ['Recuerda que antes de realizar esta distribución de planta debes tener clara la información mostrada acerca del método SLP para que puedas realizarlo de la mejor manera :D',
  'Recuerda estos tres parámetros 1. Relaciones: indica el grado relativo de proximidad deseado o requerido entre máquinas, departamentos o áreas en cuestión. 2. Espacio: determinado por la cantidad, clase y forma o configuración de los equipos a distribuir. 3. Ajuste: arreglo físico de los equipos, maquinaria y servicios, en condiciones reales.',
  'Analiza y divide bien las áreas de la planta.', 'Distribuye de la mejor manera los materiales y máquinas siguiendo las fases del modelo SLP.',
  'El método SPL incorpora el flujo de materiales en el estudio de distribución, organizando el proceso de planificación total de manera racional y estableciendo una serie de fases y técnicas que permiten identificar, valorar y visualizar todos los elementos involucrados en la implantación y las relaciones existentes entre ellos.',
  'Te recomendamos realizar varias soluciones en una hoja y después de analizarlas plantee la que consideres mejor.'];
  @ViewChild('canvas', {static:true}) canvas: ElementRef ;

  constructor(private canvasURLService: CanvasURLService, private rendered: Renderer2) { }

  ngOnInit(): void {
    window.requestAnimationFrame(this.updateCanvas);
    window.requestAnimationFrame(this.updateCanvasAfterLoad);

  }
  updateCanvasAfterLoad = () =>{
    window.requestAnimationFrame(this.updateCanvasAfterLoad);
    var URLCanvas = this.canvasURLService.getDataURL();
    var canvas2:any = document.getElementById('canvas');
    var ctx = canvas2.getContext('2d');
    var image = new Image();
    image.src = URLCanvas;
    ctx.drawImage(image,0,0);
    console.log(image);
  }

  allowDrop(e) {
    e.preventDefault();
  }

  drag(e) {
    //store the position of the mouse relativly to the image position
    e.dataTransfer.setData("mouse_position_x", e.clientX - e.target.offsetLeft);
    e.dataTransfer.setData("mouse_position_y", e.clientY - e.target.offsetTop);

    e.dataTransfer.setData("image_id", e.target.id);
  }

  drop(e) {
    e.preventDefault();

    var image = document.getElementById(e.dataTransfer.getData("image_id"));
    var canvas: any = document.getElementById('canvas');
    console.log(e.dataTransfer.getData("mouse_position_x"));
    var mouse_position_x = e.dataTransfer.getData("mouse_position_x");
    var mouse_position_y = e.dataTransfer.getData("mouse_position_y");


    var ctx = canvas.getContext('2d');
    this.imagesOnCanvas.push({
      context: ctx,
      image: image,
      x: e.clientX - canvas.offsetLeft - mouse_position_x,
      y: e.clientY - canvas.offsetTop - mouse_position_y,
      width: image.offsetWidth,
      height: image.offsetHeight
    });
  }

  updateCanvas = () => {
    window.requestAnimationFrame(this.updateCanvas);
    var canvas: any = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0,
      canvas.width,
      canvas.height
    );

    for (var x = 0, len = this.imagesOnCanvas.length; x < len; x++) {
      var obj = this.imagesOnCanvas[x];
      obj.context.drawImage(obj.image, obj.x, obj.y);
    }
  }

}
