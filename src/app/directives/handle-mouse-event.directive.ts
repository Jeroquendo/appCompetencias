import { Directive, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[handleMouseEvent]'
})
export class HandleMouseEventDirective {
  @Input() imagesOnCanvas: [];
  @Output() updateCanvas = new EventEmitter();
  constructor() { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    let downX = event.offsetX;
    let downY = event.offsetY;

    // scan images on canvas to determin if event hit an object
    for (var x = 0, len = this.imagesOnCanvas.length; x < len; x++) {
      var obj = this.imagesOnCanvas[x];
      if (!this.isPointInRange(downX, downY, obj)) {
        continue;
      }
      this.startMove(obj, downX, downY);
      break;
    }
  }

  isPointInRange(x, y, obj) {
    return !(x < obj.x ||
      x > obj.x + obj.width ||
      y < obj.y ||
      y > obj.y + obj.height);
  }

  handleUpdate() {
    this.updateCanvas.emit('');
  }

  startMove(obj, downX, downY) {
    var canvas = document.getElementById('canvas');

    var origX = obj.x, origY = obj.y;
    canvas.onmousemove = (e) => {
      var moveX = e.offsetX, moveY = e.offsetY;
      var diffX = moveX - downX, diffY = moveY - downY;


      obj.x = origX + diffX;
      obj.y = origY + diffY;
    }

    canvas.onmouseup = function () {
      // stop moving
      canvas.onmousemove = function () { };
    }
  }
}
