let playerStartMenu = false;
let playerWorldMenu = false;
let playerStateMenu = false;
let playerHouseMenu = false;

function lastMenu() {
    if (playerStateMenu == true) {playerWorldMenu = true; playerStateMenu = false} else
    if (playerHouseMenu == true) {playerStateMenu = true; playerHouseMenu = false}
}

function nextMenu() {
    if (playerStartMenu == true) {playerWorldMenu = true; playerStartMenu = false} else
    if (playerWorldMenu == true) {playerStateMenu = true; playerWorldMenu = false} else
    if (playerStateMenu == true) {playerHouseMenu = true; playerStateMenu = false} else
    if (playerHouseMenu == true) {}
}

function loadMenu() {
    if (playerStartMenu == true) {loadStartMenu()} else
    if (playerWorldMenu == true) {loadWorldMenu()} else
    if (playerStateMenu == true) {loadStateMenu()} else
    if (playerHouseMenu == true) {loadHouseMenu()}
}

function loadStartMenu() {
    styling();
    /*image(back1Img,0,0);
    image(logoImg,0,0);*/
    text("Start Menu",windowWidth/2,windowHeight/2);
}
function loadWorldMenu() {
    styling();
    text("World Menu",windowWidth/2,windowHeight/2);
}
function loadStateMenu() {
    styling();
    text("State Menu",windowWidth/2,windowHeight/2);
}
function loadHouseMenu() {
    styling();
    text("House Menu",windowWidth/2,windowHeight/2);
}

function mousePressed() {nextMenu()};
function keyPressed() {lastMenu()};