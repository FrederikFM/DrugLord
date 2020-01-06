let PlayerName = "SuperPlayer1489";
let MoneyBalance = 4342420;

let logoImg; let back1Img; let back2Img; let worldImg;
let TextR = 50; let TextG = 200; let TextB = 50;

/*function preLoad() {
  logoImg = loadImage('logo.jpg');
  back1Img = loadImage('back1.jpg');
  back2Img = loadImage('assets/back2.jpg');
  worldImg = loadImage('assets/world.jpg');
}*/

function setup() {
  playerStartMenu = true;
  playerWorldMenu = false;
  playerStateMenu = false;
  playerHouseMenu = false;
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  loadMenu();
}
function topBarUI() {
  rect(width/2,0,width,height/7.5)
}
function bottomUI() {
  rectMode(CENTER);
  fill(50);
  rect(width/2,height-height/10,width,200)
}
function styling() {
  fill(TextR,TextG,TextB);
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Georgia');
  imageMode(CENTER);
}
function playerName() {
  styling();
  textAlign(LEFT);
  textSize(width/70);
  text(PlayerName,width/60,height/24);
}
function balance() {
  styling();
  textAlign(RIGHT);
  textSize(width/70);
  text("$"+MoneyBalance,width-width/60,height/24);
}