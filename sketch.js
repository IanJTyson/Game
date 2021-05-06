'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let img1;
let img2;
let img3;
let img4;
let img5;

function preload(){
  img1 = loadImage('Images/Background.png');
  img2 = loadImage('Images/Mouse.png');
  img3 = loadImage('Images/MouseClicked.png');
  img4 = loadImage('Images/Star.png');
  img5 = loadImage('Images/StarClicked.png');
}

function setup(){
  noCursor();
  // imageMode(CENTER);
  cnv = createCanvas(w,h);

  textFont('monospace');
}

function cursorImage(){
  image(img2, mouseX, mouseY);
}

function draw(){



switch (state) {
  case 'title':
  title();
  cnv.mouseClicked(titleMouseClicked);
  break;

  case 'level 1':
  level1();
  cnv.mouseClicked(level1MouseClicked);
  break;

  case 'you win':
  youWin();
  cnv.mouseClicked(youWinMouseClicked);
  break;

  default:
  //code here for the default
  break;
}
}

function title(){
  background(0);
  textSize(80);
fill(255);
  textAlign(CENTER);
  text('STARGAZING', w/2, h/5);
textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked(){
  state = 'level 1';
}

function level1(){
  cursorImage();
  background(img1);
  text ('click on a shooting star', w/2, h - 30);
}

function level1MouseClicked(){
  points++;
  console.log ('points =' + points);

if (points >= 10){
  state = 'you win';
}
}

function youWin(){
  background(255,50,80);
  textSize (80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3 / 4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
