window.onload= function(){
var startd = new Date().getTime();
//counter for ordering
cnt = 0;
//draw canvas and add background
//document.getElementById("myCanvas1").style.display = "none";
var canvas = document.getElementById("myCanvas");
canvas.style.display = "block";
var ctx = canvas.getContext("2d");

var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;
//updating canvas for animations
interval = setInterval(updateGameArea, 20);
function clear(){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//function for drawing cars and let them move
function component(width, height, color, x, y, type) {
  this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
  this.width = width;
  this.height = height;
  this.angle = 0;
  this.moveAngle = 0;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.speed= 0;
  this.updatestraight = function() {
    if (type == "image") {
                ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
  }
  this.updateturn = function() {
    if (type == "image") {
                ctx.save();
                ctx.translate(this.x+35, this.y+50);
                ctx.rotate(this.angle);
                ctx.drawImage(this.image, this.width / -2, this.height / -2, this.width, this.height);
                ctx.restore();

        }
  }
  this.newPosstraight = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.newPosturn = function() {
        if (this.angle > Math.PI/2 ){
          this.x -= 3;
          this.y +=0;
          }
          else{
         this.angle += this.moveAngle * Math.PI / 180;
         this.x += this.speed * Math.sin(this.angle);
         this.y -= this.speed * Math.cos(this.angle);}
  }
  this.newPosturn1 = function() {
        if (this.angle < -Math.PI/2 ){
          this.x +=0 ;
          this.y -=3;
          }
          else{
         this.angle += this.moveAngle * Math.PI / 180;
         this.x += this.speed * Math.cos(this.angle);
         this.y += this.speed * Math.sin(this.angle);}
  }

}
cng=0;
cng1=0;
cng2=0;
//moving the car
function updateGameArea() {
    clear();
    car1.newPosturn();
    car1.updateturn();
    car2.newPosstraight();
    car2.updatestraight();
    if(cng==0){hand.newPosstraight(); hand.updatestraight();}
    if(cng1<10){car1.image.src = "images/cardemo1dx.png"; cng1+=1;} if(cng1>=10){car1.image.src = "images/cardemo1.png"; cng1+=1;} if(cng1>20){cng1=0;}
    if(cng2<10){hand.image.src = "images/indicatoron.ico"; cng2+=1;} if(cng2>=10){hand.image.src = "images/indicator.ico"; cng2+=1;} if(cng2>20){cng2=0;}
    if(hand.x>270 && hand.x<520){cng2=10;}
    if ((new Date().getTime() - startd) > 5000){car1.moveAngle =1.3; car1.speed =-2; hand.speedX=2; hand.speedY=0.5;}
    if(hand.x>550){hand.speedX=0; hand.speedY=0; car2.speedX=-2;}
    if(car2.x<530){cng=1;}
    
}
//create first car1
car1 = new component(70, 100,"images/cardemo1.png", 280,190, "image");
car2 = new component(100, 70,"images/cardemo2.png", 550,295, "image");
hand = new component(100, 70,"images/indicator.ico", 270,270, "image");
}
