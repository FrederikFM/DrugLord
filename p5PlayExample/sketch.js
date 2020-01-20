new p5();

let playerName = "PlayerName";
let moneyBalance = 420;

let logoImg; let back1Img; let back2Img; let worldImg; let heroinImg;
let textR = 255; let textG = 255; let textB = 255;

function preload() {
  logoImg = loadImage("https://i.ibb.co/RSyXNRH/logo.png");
  back1Img = loadImage("https://i.ibb.co/fnkXZZM/back1.png");
  back2Img = loadImage("https://i.ibb.co/BVvJzYx/back2.png");
  worldImg = loadImage("https://i.ibb.co/QF3Wrcs/worldmap.png");
  heroinImg = loadImage("https://i.ibb.co/B6Mxh4q/Kanyle.png");
  garageImg = loadImage("https://i.ibb.co/LJcJRzc/garage.png");
  houseImg = loadImage("https://i.ibb.co/7vnVFFZ/hus.png");
  labImg = loadImage("https://i.ibb.co/jg50VFz/LAB-BAGGRUND.png");
}
function setup() {
  frameRate(60);
  playerStartMenu = true;
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER)
  image(back1Img,width/2,height/2,1920,1080);
  loadMenu();
  drugCookDetection();
}

function styling() {
  fill(textR,textG,textB);
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Roboto');
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function topBottomUI() {
  rectMode(CORNERS);
  fill(40,40,40,250);
  rect(0,0,width,height*0.06)
  rect(0,height,width,height*0.85)
}
function playerInfoUI() {
  styling();
  textAlign(LEFT);
  textSize(windowHeight/35);
  text(playerName,width/60,height/24);
  styling();
  textAlign(RIGHT);
  textSize(windowHeight/35);
  text("$"+moneyBalance,width-width/60,height/24);
}
function backButtonUI() {
  fill(230,230,230,230);
  ellipseMode(CENTER);
  ellipse(width-height*0.075,height*0.925,75,75);
  styling();
  fill(0,0,0,255)
  textSize(17.5)
  textAlign(CENTER);
  text("BACK",width-height*0.075,height*0.9325);
}
function standardButtonUI(t,x,c) {
  fill(c,c,c,230);
  ellipseMode(CENTER);
  ellipse(x,height*0.925,75,75);
  styling();
  fill(0,0,0,255)
  textSize(17.5)
  textAlign(CENTER);
  fill(250,250,250,250)
  text(t,x,height*0.9325);
}
function standardMenuUI() {
    fill(40,40,40,240);
    rect(width/2,height*0.45,width*0.9,height*0.6);
}
function standardMenuTitleUI(t) {
    styling();
    fill(30,30,30,255)
    rect(width/2,height*0.695,135,35);
    fill(250,250,250,250)
    text(t,width/2,height*0.7);
}