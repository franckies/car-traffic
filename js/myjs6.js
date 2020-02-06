window.onload = function(){
//counter for ordering
cnt = 0;
sem=0;
//draw canvas and add background
//document.getElementById("myCanvas1").style.display = "none";
var canvas = document.getElementById("myCanvas");
canvas.style.display = "block";
document.getElementById("p").style.display = "none";
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
    if(car3.x <10){
    sem=1;
    document.getElementById("myCanvas").style.background = "url(images/incrocio6on.png)";}

}
//create first car1
car1 = new component(70, 100,"images/car4.png", 445, 330, "image");
car2 = new component(70, 100,"images/car2.png", 300, 40, "image");
car3 = new component(100, 70,"images/car5.png", 580, 150, "image");


//move cars when click on them
canvas.addEventListener("click", function(event){
var x = event.pageX - canvasLeft;
var y = event.pageY - canvasTop;
//when clicking on first car

if (x >= 445 && x <= 515 && y >= 330 && y <= 430) {
 if(cnt == 0 || sem == 0){alert("Semaforo rosso!")} else {if(sem == 1){car1.speedY -= 3; cnt+=1 ;}}
}
if (x >= 300 && x <= 370 && y >= 40 && y <= 140) {
 if(cnt == 0 || sem == 0){alert("Semaforo rosso!")} else {if(sem == 1){car2.speedY += 3; cnt+=1 ;}}
}
if (x >= 580 && x <= 680 && y >= 150 && y <= 220) {
  cnt += 1;
  car3.speedX -=3 ;
}
});
}


function start(){
  var canvasd = document.getElementById("demo6");
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
      if(card3.x <10){
      document.getElementById("demo6").style.background = "url(images/incrocio6on.png)";
      card1.speedY = -3
      card2.speedY = +3
      }

    }
    //create first card1
    card1 = new componentd(70, 100,"images/car4.png", 445, 330, "image");
    card2 = new componentd(70, 100,"images/car2.png", 300, 40, "image");
    card3 = new componentd(100, 70,"images/car5.png", 580, 150, "image");  card3.speedX =-3 ;


}
