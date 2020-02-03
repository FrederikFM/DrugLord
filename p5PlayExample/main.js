new p5();

let playerName = "DrugL0rd79";
let moneyBalance = 60000;

let logoImg; let back1Img; let back2Img; let worldImg; let heroinImg;
let textR = 255; let textG = 255; let textB = 255;

let button1x; let button2x; let button3x;

function preload() {
  //IMG LOAD
  //General
  logoImg = loadImage("https://i.ibb.co/RSyXNRH/logo.png");
  back1Img = loadImage("https://i.ibb.co/fnkXZZM/back1.png");
  back2Img = loadImage("https://i.ibb.co/BVvJzYx/back2.png");
  worldImg = loadImage("https://i.ibb.co/QF3Wrcs/worldmap.png");
  houseImg = loadImage("https://i.ibb.co/7vnVFFZ/hus.png");
  garageImg = loadImage("https://i.ibb.co/LJcJRzc/garage.png");
  labImg = loadImage("https://i.ibb.co/jg50VFz/LAB-BAGGRUND.png");
  officeImg = loadImage("https://i.ibb.co/jyGng8w/Office-Baggrund.png");
  //Cars
  for (i=0; i<carArray.length; i++) {
  loadImage(carArray[i].image);
  }
  //Drugs
  for (i=0; i<drugArray.length; i++) {
  loadImage(drugArray[i].image);
  }
}

function setup() {
  //getLocal();
  frameRate(60);
  playerStartMenu = true;
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  image(back1Img,width/2,height/2,1920,1080);
  loadMenu();
  drugCookDetection();
  exportDetection();
  storeLocal();
}

function mousePressed() {
    mousePressedMenus();
    mousePressedGaragemenu();
    mousePressedOfficemenu();
    mousePressedLabmenu();
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
  ellipse(width-height*0.075,height*0.925,height/12,height/12);
  styling();
  fill(0,0,0,255)
  textSize(height/50)
  textAlign(CENTER);
  text("BACK",width-height*0.075,height*0.9325);
}
function standardButtonUI1(t,on) {
  
  button1x = height*0.075;
  button2x = button1x + height*0.1;
  button3x = button2x + height*0.1;
  
  let x = button1x;
  ellipseMode(CENTER);
  if (on) {fill(200,200,200,230)}
  else  {fill(60,60,60,230)}
  ellipse(x,height*0.925,height/12,height/12);
  styling();
  textSize(height/50);
  textAlign(CENTER);
  if (on) {fill(60,60,60,230)}
  else  {fill(250,250,250,230)}
  text(t,x,height*0.9325);
}
function standardButtonUI2(t,on) {
  let x = button2x;
  ellipseMode(CENTER);
  if (on) {fill(200,200,200,230)}
  else  {fill(60,60,60,230)}
  ellipse(x,height*0.925,height/12,height/12);
  styling();
  textSize(height/50);
  textAlign(CENTER);
  if (on) {fill(60,60,60,230)}
  else  {fill(250,250,250,230)}
  text(t,x,height*0.9325);
}
function standardButtonUI3(t,on) {
  let x = button3x;
  ellipseMode(CENTER);
  if (on) {fill(200,200,200,230)}
  else  {fill(60,60,60,230)}
  ellipse(x,height*0.925,height/12,height/12);
  styling();
  textSize(height/50);
  textAlign(CENTER);
  if (on) {fill(60,60,60,230)}
  else  {fill(250,250,250,230)}
  text(t,x,height*0.9325);
}
function standardMenuUI() {
    fill(40,40,40,240);
    rect(width/2,height*0.45,width*0.9,height*0.6);
}
function buyButtonUI(t) {
    styling();
    fill(30,30,30,255)
    rect(width/2,height*0.695,135,35);
    fill(250,250,250,250)
    text(t,width/2,height*0.7);
}

function storeLocal() {
    storeItem('Money',moneyBalance);
    storeItem('carArray',carArray);
    storeItem('drugArray',drugArray);
}

function getLocal() {
    moneyBalance = getItem('Money');
    novehicleBought = getItem('carArray');
    novehicleBought = getItem('drugArray');
}