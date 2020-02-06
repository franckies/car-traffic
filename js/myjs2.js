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
          this.x += 3;
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
    car1.newPosstraight();
    car1.updatestraight();
    if(cng1<10){car1.image.src = "images/police.png"; cng1+=1;} if(cng1>=10){car1.image.src = "images/policeon.png"; cng1+=1;} if(cng1>20){cng1=0;}
    car2.newPosturn();
    car2.updateturn();
    if(cng2<10){car2.image.src = "images/car2sx.png"; cng2+=1;} if(cng2>=10){car2.image.src = "images/car2.png"; cng2+=1;} if(cng2>20){cng2=0;}
    car3.newPosstraight();
    car3.updatestraight();
    if(navigator.userAgent.indexOf("Firefox") != -1 ){
      if(car3.x < car2.x + car2.width/1.5  && car3.x + car3.width/1.5  > car2.x && car3.y < car2.y + car2.height/1.5 && car3.y + car3.height/1.5 > car2.y){ alert("Hai causato un incidente! Riprova con piu' calma"); location.reload(); }
    }
    else{
    if(car3.x < car2.x + car2.width/1.5  && car3.x + car3.width/1.5  > car2.x && car3.y < car2.y + car2.height/1.5 && car3.y + car3.height/1.5 > car2.y){ location.reload(); alert("Hai causato un incidente! Riprova con piu' calma");}
   }
}
//create first car1
car1 = new component(100, 70,"images/police.png", 550, 300, "image");
car2 = new component(70, 100,"images/car2.png", 300, 180, "image");
car3 = new component(100, 70,"images/car32.png", 30, 390, "image");

//move cars when click on them
canvas.addEventListener("click", function(event){
var x = event.pageX - canvasLeft;
var y = event.pageY - canvasTop;
//when clicking on first car
if (x >= 550 && x <= 650 && y >= 300 && y <= 370 && cnt==0 && car1.x==550 && car1.y==300) {
      var audio = document.getElementById("audio");
      audio.play();
      cnt=1;
      car1.speedX -=5.65;
}
if (x >= 300 && x <= 370 && y >= 180 && y <= 280 && car2.x==300 && car2.y==180) {
       if(cnt == 2){cnt=3; car2.moveAngle =-0.6; car2.speed =-2;} else{alert("Ordine errato! Seleziona un'altra macchina!")}
}
if (x >= 30 && x <= 130 && y >= 390 && y <= 460 && car3.x==30 && car3.y==390) {
       if(cnt == 1){cnt=2; car3.speedX += 3;} else{alert("Ordine errato! Seleziona un'altra macchina!")}
}
});
}

function start(){
  var canvasd = document.getElementById("demo2");
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

  }
  cngd1=0;
  cngd2=0;
  //moving the card
  function updateGameArea() {
      clear();
      card1.newPosstraight();
      card1.updatestraight();
      if(cngd1<10){card1.image.src = "images/police.png"; cngd1+=1;} if(cngd1>=10){card1.image.src = "images/policeon.png"; cngd1+=1;} if(cngd1>20){cngd1=0;}
      card2.newPosturn();
      card2.updateturn();
      if(cngd2<10){card2.image.src = "images/car2sx.png"; cngd2+=1;} if(cngd2>=10){card2.image.src = "images/car2.png"; cngd2+=1;} if(cngd2>20){cngd2=0;}
      card3.newPosstraight();
      card3.updatestraight();
      if(card1.x<150){card3.speedX = 3;}
      if(card3.x>300){ card2.moveAngle =-0.6; card2.speed =-2;}

    }
  //create first card1
  card1 = new componentd(100, 70,"images/police.png", 550, 300, "image"); card1.speedX = -5.65;
  card2 = new componentd(70, 100,"images/car2.png", 300, 180, "image");
  card3 = new componentd  (100, 70,"images/car32.png", 30, 390, "image");
}
