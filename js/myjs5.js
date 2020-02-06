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
                ctx.fillText("Risposta corretta!", canvas.width/2, canvas.height/2);}
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
}
cng=0;
//moving the car
function updateGameArea() {
    clear();
    car1.newPosstraight();
    car1.updatestraight();
    car2.newPosstraight();
    car2.updatestraight();
    car3.newPosstraight();
    car3.updatestraight();

}
//create first car1
car1 = new component(700, 70,"images/tram.png", 560, 145, "image");
car2 = new component(70, 100,"images/car2.png", 280, 35, "image");
car3 = new component(70, 100,"images/car4.png", 470, 315, "image");

//move cars when click on them
canvas.addEventListener("click", function(event){
var x = event.pageX - canvasLeft;
var y = event.pageY - canvasTop;
//when clicking on first car
if (x >= 560 && x <= 1260 && y >= 145 && y <= 215 && car1.x==560 && car1.y==145) {
  cnt = 1;
  car1.speedX -= 4;
}
if (x >= 280 && x <= 350 && y >= 35 && y <= 135 && car2.x==280 && car2.y==35) {
  if(cnt == 0){alert("Ordine errato! Seleziona un'altra macchina!")} else if(car1.x+700>230){alert("Lascia prima passare il tram!")} else{car2.speedY += 3; cnt+=1;}
}
if (x >= 470 && x <= 540 && y >= 315 && y <= 415 && car3.x==470 && car3.y==315) {
  if(cnt == 0){alert("Ordine errato! Seleziona un'altra macchina!")}  else if(car1.x+700>350){alert("Lascia prima passare il tram!")} else{car3.speedY -= 3; cnt+=1;}
}
});
}

function start(){
  var canvasd = document.getElementById("demo5");
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
  }
  cngd=0;
  //moving the card
  function updateGameArea() {
      clear();
      card1.newPosstraight();
      card1.updatestraight();
      card2.newPosstraight();
      card2.updatestraight();
      card3.newPosstraight();
      card3.updatestraight();
      if(card1.x+700<300){card2.speedY = 3; card3.speedY = -3}

  }
  //create first car1
  card1 = new componentd(700, 70,"images/tram.png", 560, 145, "image"); card1.speedX -= 4;
  card2 = new componentd(70, 100,"images/car2.png", 280, 35, "image");
  card3 = new componentd(70, 100,"images/car4.png", 470, 315, "image");

}
