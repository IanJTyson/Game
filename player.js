
class Player {
  constructor(){
    this.r = 60;
    this.x = w/2;
    this.y = h-this.r;
    this.speed = 2;
    this.direction = 'still';
  }

display(){
  //player (replace with an image)
  rect(this.x, this.y, this.r, this.r);
}
move(){
switch (this.direction){
  case 'still':
  //dont move
break;
case 'left':
//decrease x pos
this.x -= this.speed
break;
case 'right':
//increase x pos
this.x += this.speed
break;
default:
break;
}
}

}
