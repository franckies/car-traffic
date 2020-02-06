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
                if(cnt==3){ctx.font="30px Comic Sans MS";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Risposta corretta!", canvas.width/2, canvas.height/2);}}
         else {
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
        if (this.angle > Math.PI/4){
          this.x -= 2;
          this.y +=2;
          }
          else{
         this.angle += this.moveAngle * Math.PI / 30;
         this.x += this.speed * Math.sin(this.angle);
         this.y -= this.speed * Math.cos(this.angle);}
  }

}
cng=0;
//moving the car
function updateGameArea() {
    clear();
    car1.newPosstraight();
    car1.updatestraight();
    car2.newPosturn();
    car2.updateturn();
    if(cng<10){car2.image.src = "images/car7dx.png"; cng+=1;} if(cng>=10){car2.image.src = "images/car7.png"; cng+=1;} if(cng>20){cng=0;}
    car3.newPosstraight();
    car3.updatestraight();
}
//create first car1
car1 = new component(100, 70,"images/car23.png", 135, 225, "image");
car2 = new component(70, 100,"images/car7.png", 260, 30, "image");
car3 = new component(100, 70,"images/car3.png", 520, 135, "image");

//move cars when click on them
canvas.addEventListener("click", function(event){
var x = event.pageX - canvasLeft;
var y = event.pageY - canvasTop;
//when clicking on first car
if (x >= 135 && x <= 235 && y >= 225 && y <= 295 && cnt==0 && car1.x==135 && car1.y==225) {
  car1.speedX += 3;
  cnt=1;}
if (x >= 260 && x <= 330 && y >= 30 && y <= 130 && car2.x==260 && car2.y==30) {
   if(cnt == 1){cnt=2; car2.moveAngle =0.0285;car2.speed -=2;} else{alert("Ordine errato! Seleziona un'altra macchina!")}
}
if (x >= 520 && x <= 620 && y >= 135 && y <= 205 && car3.x==520 && car3.y==135) {
       if(cnt == 2){cnt=3; car3.speedX -= 3;} else{alert("Ordine errato! Seleziona un'altra macchina!")}
}
});
}

function start(){
  var canvasd = document.getElementById("demo9");
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
          if (this.angle > Math.PI/4){
            this.x -= 2;
            this.y +=2;
            }
            else{
           this.angle += this.moveAngle * Math.PI / 30;
           this.x += this.speed * Math.sin(this.angle);
           this.y -= this.speed * Math.cos(this.angle);}
    }

  }
  cngd=0;
  //moving the card
  function updateGameArea() {
      clear();
      card1.newPosstraight();
      card1.updatestraight();
      card2.newPosturn();
      card2.updateturn();
      if(cngd<10){card2.image.src = "images/car7dx.png"; cngd+=1;} if(cngd>=10){card2.image.src = "images/car7.png"; cngd+=1;} if(cngd>20){cngd=0;}
      card3.newPosstraight();
      card3.updatestraight();
      if(card1.x>250){card2.moveAngle =0.0285;card2.speed =-2;}
      if(card2.y>150){card3.speedX =-3;}
  }
  //create first card1
  card1 = new componentd(100, 70,"images/car23.png", 135, 225, "image"); card1.speedX = +3;
  card2 = new componentd(70, 100,"images/car7.png", 260, 30, "image");
  card3 = new componentd(100, 70,"images/car3.png", 520, 135, "image");
}
