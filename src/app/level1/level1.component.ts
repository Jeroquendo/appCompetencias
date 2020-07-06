import { Component, OnInit } from '@angular/core';
import { CanvasURLService } from '../servicio/canvasURL.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {
  optionSelected: any = 'paredes';
  cv: any; cx: any;
  objetos: any; objetoActual = null;
  inicioX = 0; inicioY = 0;
  imagesOnCanvas = [];
  animation = true;
  requestId:any;
  requestIdUpdate:any;
  constructor(private canvasURLService: CanvasURLService) {}


  ngOnInit(): void {
    window.requestAnimationFrame(this.updateCanvas);
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

  resetCanvas = () =>{

    var canvas: any = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    // bind event handler to clear button
    console.log("hice click");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.imagesOnCanvas = [];
    if(!this.requestId){
      this.requestId = window.requestAnimationFrame(this.resetCanvas);
    }else{
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
    // ctx.beginPath();

  }
  saveCanvas(){
    var canvas: any = document.getElementById('canvas');
    const url = canvas.toDataURL();
    this.canvasURLService.toDataURL(url);
  }
  /*
   descargar(){
    var canvas:any = document.getElementById("canvas");
    var data = canvas.toDataURL('image/png');
    //Otros navegadores: Google chrome, Firefox etc...
    this.href = data;
    document.getElementById('reiniciar').addEventListener('click',this.descargar,false);
  }*/

}
