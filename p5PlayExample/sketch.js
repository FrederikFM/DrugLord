let PlayerName = "SuperPlayer1489";
let MoneyBalance = 4342420;
let drawMenu = false;
let 

function setup() {

}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(250);

  drawMenu == true {
    bottomUI();
    topBarUI();
    playerName();
    balance();
  }


}
function topBarUI() {
  rect(width/2,0,width,height/7.5)
}
function bottomUI() {
  rectMode(CENTER);
  fill(50);
  rect(width/2,height-height/10,width,200)
}
function textStyling() {
  fill(TextR,TextG,TextB);
  textStyle(BOLD);
  textFont('Georgia');
}
function playerName() {
  textStyling();
  textAlign(LEFT);
  textSize(width/70);
  text(PlayerName,width/60,height/24);
}
function balance() {
  textStyling();
  textAlign(RIGHT);
  textSize(width/70);
  text("$"+MoneyBalance,width-width/60,height/24);
}



let TextR = 50; let TextG = 200; let TextB = 50;

rect(width/2,0,width,height/7.5)