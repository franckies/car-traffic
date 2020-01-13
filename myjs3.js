window.onload = function(){
//counter for ordering
cnt = 0;
//draw canvas and add background
//document.getElementById("myCanvas1").style.display = "none";
document.getElementById("p").style.display = "none";
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
                if(cnt==3){ctx.font="30px Comic Sans MS";
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
cng1=0;
cng2=0;
//moving the car
function updateGameArea() {
    clear();
    car1.newPosturn();
    car1.updateturn();
    car2.newPosstraight();
    car2.updatestraight();
    car3.newPosturn1();
    car3.updateturn();
    if(cng1<10){car1.image.src = "images/car4sx.png"; cng1+=1;} if(cng1>=10){car1.image.src = "images/car4.png"; cng1+=1;} if(cng1>20){cng1=0;}
    if(cng2<10){car3.image.src = "images/car23sx.png"; cng2+=1;} if(cng2>=10){car3.image.src = "images/car23.png"; cng2+=1;} if(cng2>20){cng2=0;}
    if(navigator.userAgent.indexOf("Firefox") != -1 ){
    if(car1.x < car2.x + car2.width/2  && car1.x + car1.width/2  > car2.x && car1.y < car2.y + car2.height/2 && car1.y + car1.height/2 > car2.y){ alert("Hai causato un incidente! Riprova con piu' calma");location.reload();}
    if(car1.x < car3.x + car3.width/2  && car1.x + car1.width/2  > car3.x && car1.y < car3.y + car3.height/2 && car1.y + car1.height/2 > car3.y){ alert("Hai causato un incidente! Riprova con piu' calma");location.reload(); }
    if(car3.x < car2.x + car2.width/2  && car3.x + car3.width/2  > car2.x && car3.y < car2.y + car2.height/2 && car3.y + car3.height/2 > car2.y){  alert("Hai causato un incidente! Riprova con piu' calma");location.reload();}
    }
    else{
      if(car1.x < car2.x + car2.width/2  && car1.x + car1.width/2  > car2.x && car1.y < car2.y + car2.height/2 && car1.y + car1.height/2 > car2.y){ location.reload();alert("Hai causato un incidente! Riprova con piu' calma");}
      if(car1.x < car3.x + car3.width/2  && car1.x + car1.width/2  > car3.x && car1.y < car3.y + car3.height/2 && car1.y + car1.height/2 > car3.y){ location.reload(); alert("Hai causato un incidente! Riprova con piu' calma");}
      if(car3.x < car2.x + car2.width/2  && car3.x + car3.width/2  > car2.x && car3.y < car2.y + car2.height/2 && car3.y + car3.height/2 > car2.y){ location.reload(); alert("Hai causato un incidente! Riprova con piu' calma");}
      }
}
//create first car1
car1 = new component(70, 100,"images/car4.png",470, 320, "image");
car2 = new component(100,70,"images/car5.png", 590, 149, "image");
car3 = new component(100, 70,"images/car23.png", 150, 220, "image");

//move cars when click on them
canvas.addEventListener("click", function(event){
var x = event.pageX - canvasLeft;
var y = event.pageY - canvasTop;
//when clicking on first car
if (x >= 450 && x <= 520 && y >= 320 && y <= 420 && car1.x==470 && car1.y==320) {
  cnt = 1;
  car1.moveAngle = -0.6;
  car1.speed = 2;
}
if (x >= 560 && x <= 660 && y >= 160 && y <= 230 && car2.x==590 && car2.y==149) {
   if(cnt == 1){cnt=2; car2.speedX = -3;} else{alert("Ordine errato! Seleziona un'altra macchina!")}
 }

if (x >= 140 && x <= 240 && y >= 240 && y <= 310 && car3.x==150 && car3.y==220) {
  if(cnt == 2){cnt=3; car3.moveAngle =-0.35; car3.speed=2;}  else{alert("Ordine errato! Seleziona un'altra macchina!")}
}
});
}


function start(){
  var canvasd = document.getElementById("demo3");
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
  cngd1=0;
  cngd2=0;
  //moving the card
  function updateGameArea() {
      clear();
      card1.newPosturn();
      card1.updateturn();
      card2.newPosstraight();
      card2.updatestraight();
      card3.newPosturn1();
      card3.updateturn();
      if(cngd1<10){card1.image.src = "images/car4sx.png"; cngd1+=1;} if(cngd1>=10){card1.image.src = "images/car4.png"; cngd1+=1;} if(cngd1>20){cngd1=0;}
      if(cngd2<10){card3.image.src = "images/car23sx.png"; cngd2+=1;} if(cngd2>=10){card3.image.src = "images/car23.png"; cngd2+=1;} if(cngd2>20){cngd2=0;}
      if(card1.x<150){card2.speedX = -3;}
      if(card2.x<150){card3.moveAngle =-0.35; card3.speed=2;}
  }
  //create first card1
  card1 = new componentd(70, 100,"images/car4.png",470, 320, "image"); card1.moveAngle = -0.6; card1.speed = 2;
  card2 = new componentd(100,70,"images/car5.png", 590, 149, "image");
  card3 = new componentd(100, 70,"images/car23.png", 150, 220, "image");
}
