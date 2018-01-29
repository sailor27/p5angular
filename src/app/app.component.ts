///<reference path="./../../node_modules/p5/lib/p5.global-mode.d.ts" />
const p5 = require('p5');
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Canvas';
  myp5 = p5;


//initialize an instance of p5 canvas with drawing functions
  drawStuff(){
    const sketch = function( instance ) {
    //create canvas and set bg color
      instance.setup = function() {
        instance.createCanvas(700, 410);
        instance.background(51);
      };
    //draw purple filled ellipse at mouse position
      instance.draw = function() {
        instance.fill(255, 0 , 200, 25);
        instance.noStroke();
        instance.ellipse(instance.mouseX, instance.mouseY, 48, 48);
      };
    }; //sketch

    this.myp5 = new p5(sketch);

  }

  deleteCanvas() {
    this.myp5.remove();
  }


  ngOnInit(){
    this.drawStuff();
    console.log(this.myp5);
    setTimeout(this.myp5.deleteCanvas, 3000);

    //delete the canvas after a set interval
  }
}
