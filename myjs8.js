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
        if (this.angle < -Math.PI ){
          this.x += 1;
          this.y +=0;
          }
          else{
         this.angle += this.moveAngle * Math.PI / 180;
         this.x += this.speed * Math.sin(this.angle);
         this.y -= this.speed * Math.cos(this.angle);}
  }
  this.newPosturn1 = function() {
    if (this.angle > Math.PI/2 ){
      this.x += 0;
      this.y -=3;
      }
      else{
     this.angle += this.moveAngle * Math.PI / 180;
     this.x -= this.speed * Math.cos(this.angle);
     this.y -= this.speed * Math.sin(this.angle);}
  }

}
cng=0;
cng1=0;
//moving the car
function updateGameArea() {
    clear();
    car1.newPosturn();
    car1.updateturn();
    if(cng<10){car1.image.src = "images/car1sx.png"; cng+=1;} if(cng>=10){car1.image.src = "images/car1.png"; cng+=1;} if(cng>20){cng=0;}
    if(car1.y < 240 && car1.y>190){car1.moveAngle = -1} if(car1.x<309 && car1.x>220 && car1.y > 100){car1.moveAngle=0.7;} if(car1.x<220 && car1.y <190 && car1.x>0 && car1.y>0){car1.moveAngle=0;} if(car1.x<-80){car1.speed=0;}
    car3.newPosturn1();
    car3.updateturn();
    if(cng1<10){car3.image.src = "images/car3dx.png"; cng1+=1;} if(cng1>=10){car3.image.src = "images/car3.png"; cng1+=1;} if(cng1>20){cng1=0;}

}
//create first car1
car1 = new component(70, 100,"images/car1.png", 470, 300, "image");
car3 = new component(100, 70,"images/car3.png", 600, 150, "image");

//move cars when click on them
canvas.addEventListener("click", function(event){
var x = event.pageX - canvasLeft;
var y = event.pageY - canvasTop;
//when clicking on first car
if (x >= 470 && x <= 540 && y >= 330 && y <= 430 && car1.x==470 && car1.y==300) {
  car1.moveAngle =0.7; car1.speed =2;
  cnt +=1;
}

if (x >= 600 && x <= 700 && y >=150 && y <= 220 && car3.x==600 && car3.y==150) {
  if(car1.y>120 && car1.x>400 && car1.y<290){alert("Dare precedenza alle auto sulla rotonda!")}
  else{car3.moveAngle =1.1; car3.speed=3; cnt+=1;}
  //else if( cnt==0){car3.moveAngle =0.9; car3.speed=3;}
}
});
}

function start(){
  var canvasd = document.getElementById("demo8");
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
          if (this.angle < -Math.PI ){
            this.x += 1;
            this.y +=0;
            }
            else{
           this.angle += this.moveAngle * Math.PI / 180;
           this.x += this.speed * Math.sin(this.angle);
           this.y -= this.speed * Math.cos(this.angle);}
    }
    this.newPosturn1 = function() {
      if (this.angle > Math.PI/2 ){
        this.x += 0;
        this.y -=3;
        }
        else{
       this.angle += this.moveAngle * Math.PI / 180;
       this.x -= this.speed * Math.cos(this.angle);
       this.y -= this.speed * Math.sin(this.angle);}
    }

  }
  cngd=0;
  cngd1=0;
  //moving the card
  function updateGameArea() {
      clear();
      card1.newPosturn();
      card1.updateturn();
      if(cngd<10){card1.image.src = "images/car1sx.png"; cngd+=1;} if(cngd>=10){card1.image.src = "images/car1.png"; cngd+=1;} if(cngd>20){cngd=0;}
      if(card1.y < 240 && card1.y>190){card1.moveAngle = -1} if(card1.x<309 && card1.x>220 && card1.y > 100){card1.moveAngle=0.7;} if(card1.x<220 && card1.y <190 && card1.x>0 && card1.y>0){card1.moveAngle=0;} if(card1.x<-80){card1.speed=0;}
      card3.newPosturn1();
      card3.updateturn();
      if(cngd1<10){card3.image.src = "images/car3dx.png"; cngd1+=1;} if(cngd1>=10){card3.image.src = "images/car3.png"; cngd1+=1;} if(cngd1>20){cngd1=0;}
      if(card1.x<370){card3.moveAngle =1.1; card3.speed=3;}

  }
  //create first card1
  card1 = new componentd(70, 100,"images/car1.png", 470, 300, "image"); card1.moveAngle =0.7; card1.speed =2;
  card3 = new componentd(100, 70,"images/car3.png", 600, 150, "image");
}
