window.onload = function(){
//counter for ordering
cnt = 0;
//draw canvas and add background
//document.getElementById("myCanvas1").style.display = "none";
var canvas = document.getElementById("myCanvas");
document.getElementById("p").style.display = "none";
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
                if(cnt==2){ctx.font="30px Comic Sans MS";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Risposta corretta!", canvas.width/2, canvas.height/2);}
        }
  }
  this.newPosstraight = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.newPosturn = function() {
        if (this.angle < -Math.PI/2 ){
          this.x += 3;
          this.y +=0;
          }
          else{
         this.angle += this.moveAngle * Math.PI / 180;
         this.x += this.speed * Math.sin(this.angle);
         this.y -= this.speed * Math.cos(this.angle);}
  }
  this.newPosturn1 = function() {
        if (this.angle < -Math.PI/2 ){
          this.x -= 3;
          this.y +=0;
          }
          else{
         this.angle += this.moveAngle * Math.PI / 180;
         this.x += this.speed * Math.sin(this.angle);
         this.y -= this.speed * Math.cos(this.angle);}
  }

}
cng1=0;
cng2=0;
//moving the car
function updateGameArea() {
    clear();
    car1.newPosturn();
    car1.updateturn();
    car2.newPosturn1();
    car2.updateturn();
    if(cng1<10){car1.image.src = "images/car6dx.png"; cng1+=1;} if(cng1>=10){car1.image.src = "images/car6.png"; cng1+=1;} if(cng1>20){cng1=0;}
    if(cng2<10){car2.image.src = "images/car1sx.png"; cng2+=1;} if(cng2>=10){car2.image.src = "images/car1.png"; cng2+=1;} if(cng2>20){cng2=0;}
}
//create first car1
car1 = new component(70, 100,"images/car6.png", 380, 40, "image");
car2 = new component(70, 100,"images/car1.png", 380, 320, "image");

//move cars when click on them
canvas.addEventListener("click", function(event){
var x = event.pageX - canvasLeft;
var y = event.pageY - canvasTop;
//when clicking on first car
if (x >= 380 && x <= 450 && y >= 55 && y <= 155 && car1.x==380 && car1.y==40) {
  car1.moveAngle =-0.70;
  car1.speed =-2;
  if(cnt==0){cnt=1;} else{cnt=2;}
}
if (x >= 380 && x <= 450 && y >= 320 && y <= 420 && car2.x==380 && car2.y==320) {
       car2.moveAngle =-0.65;
       car2.speed =2;
  if(cnt==0){cnt=1;} else{cnt=2;}
}
}
);
}

function start(){
  var canvasd = document.getElementById("demo4");
  canvasd.style.display = "block";
  document.getElementById("p").style.display = "block";
  document.getElementById("but").style.display = "none";
  var dmx = canvasd.getContext("2d");

  var canvasdLeft = canvasd.offsetLeft;
  var canvasdTop = canvasd.offsetTop;
  //updating canvasd for animations
  interval = setInterval(updateGameArea, 20);
  function clear(){
    dmx.clearRect(0, 0, dmx.canvas.width, dmx.canvas.height);
  }

  //function for drawing cards and let them move
  function componentd(width, height, color, x, y, type) {
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
                  dmx.drawImage(this.image,
                  this.x,
                  this.y,
                  this.width, this.height);
          } else {
              dmx.fillStyle = color;
              dmx.fillRect(this.x, this.y, this.width, this.height);
          }
    }
    this.updateturn = function() {
      if (type == "image") {
                  dmx.save();
                  dmx.translate(this.x+35, this.y+50);
                  dmx.rotate(this.angle);
                  dmx.drawImage(this.image, this.width / -2, this.height / -2, this.width, this.height);
                  dmx.restore();
          }
    }
    this.newPosstraight = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    this.newPosturn = function() {
          if (this.angle < -Math.PI/2 ){
            this.x += 3;
            this.y +=0;
            }
            else{
           this.angle += this.moveAngle * Math.PI / 180;
           this.x += this.speed * Math.sin(this.angle);
           this.y -= this.speed * Math.cos(this.angle);}
    }
    this.newPosturn1 = function() {
          if (this.angle < -Math.PI/2 ){
            this.x -= 3;
            this.y +=0;
            }
            else{
           this.angle += this.moveAngle * Math.PI / 180;
           this.x += this.speed * Math.sin(this.angle);
           this.y -= this.speed * Math.cos(this.angle);}
    }

  }
  cngd1=0;
  cngd2=0;
  //moving the card
  function updateGameArea() {
      clear();
      card1.newPosturn();
      card1.updateturn();
      card2.newPosturn1();
      card2.updateturn();
      if(cngd1<10){card1.image.src = "images/car6dx.png"; cngd1+=1;} if(cngd1>=10){card1.image.src = "images/car6.png"; cngd1+=1;} if(cngd1>20){cngd1=0;}
      if(cngd2<10){card2.image.src = "images/car1sx.png"; cngd2+=1;} if(cngd2>=10){card2.image.src = "images/car1.png"; cngd2+=1;} if(cngd2>20){cngd2=0;}
  }
  //create first card1
  card1 = new componentd(70, 100,"images/car6.png", 380, 40, "image");
  card2 = new componentd(70, 100,"images/car1.png", 380, 320, "image");
  card1.moveAngle =-0.70;
  card1.speed =-2;
  card2.moveAngle =-0.65;
  card2.speed =2;
}
