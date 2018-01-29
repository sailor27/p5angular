///<reference path="./../../node_modules/p5/lib/p5.global-mode.d.ts" />
const p5 = require('p5');
import { Component, OnInit } from '@angular/core';
// declare var p5: any;
// import  p5  from 'p5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Canvas';

  ngOnInit(){

    // createCanvas(200,200);
    // this.setup();
    // draw();

    const sketch = function( p ) {

      let x = 100;
      let y = 100;

      p.setup = function() {
        p.createCanvas(700, 410);
      };

      p.draw = function() {
        p.background(0);
        p.fill(255);
        p.rect(x,y,50,50);
      };
    };
    let myp5 = new p5(sketch);
    console.log(myp5);
  }




  //
  // setup() {
  //   console.log("square canvas");
  //   createCanvas(200,200);
  // }
  //
  // draw() {
  //   console.log("rectangle");
  //   rect(50,50,20,20);
  // }

}
