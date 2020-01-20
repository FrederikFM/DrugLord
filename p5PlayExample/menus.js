//Main Menu's Valuables
let playerStartMenu = false;
let playerWorldMenu = false;
let playerStateMenu = false;

//State Menu's Valuables
let playerPropertyMenu = false;
let playerHouseMenu = false;

//House Menu's Valuables
let playerOfficeMenu = false;
let playerLabMenu = false;
let playerGarageMenu = false;

//Office Lab Garage Menu's
let officeMenu1 = false;
let officeMenu2 = false;
let officeMenu3 = false;
let labMenu1 = false;
let labMenu2 = false;
let garageMenu1 = false;
let garageMenu2 = false;



//SWITCH TO LAST MENU FUNCTIONS
function lastMenu() {
    //Main Menu's
    if (playerStateMenu) {playerWorldMenu = true; playerStateMenu = false} else

    //State Menu's
    if (playerPropertyMenu) {playerStateMenu = true; playerPropertyMenu = false} else
    if (playerHouseMenu) {playerStateMenu = true; playerHouseMenu = false} else

    //House Menu's
    if (officeMenu1 || officeMenu2 || officeMenu3 || labMenu1 || labMenu2 || garageMenu1 || garageMenu2) {
        closeOLGMenus();
    } else
    if (playerOfficeMenu) {playerHouseMenu = true; playerOfficeMenu = false; closeOLGMenus()} else
    if (playerLabMenu) {playerHouseMenu = true; playerLabMenu = false; closeOLGMenus()} else
    if (playerGarageMenu) {playerHouseMenu = true; playerGarageMenu = false; closeOLGMenus()}
  
}

//SWITCH TO NEXT MENU FUNCTIONS
function nextMenu() {
    //Main Menu's
    if (playerStartMenu) {playerWorldMenu = true; playerStartMenu = false} else
    if (playerWorldMenu) {playerStateMenu = true; playerWorldMenu = false} else

    //State Menu's
    if (playerStateMenu && mouseX < width/2) {playerPropertyMenu = true; playerStateMenu = false} else
    if (playerStateMenu && mouseX > width/2) {playerHouseMenu = true; playerStateMenu = false} else

    //House Menu's
    if (playerHouseMenu && mouseX < width*0.33) {playerOfficeMenu = true; playerHouseMenu = false} else
    if (playerHouseMenu && mouseX > width*0.33 && mouseX < width*0.66) {playerLabMenu = true; playerHouseMenu = false} else
    if (playerHouseMenu && mouseX > width*0.66) {playerGarageMenu = true; playerHouseMenu = false}
}

//WHAT MENU TO DRAW
function loadMenu() {
    if (playerStartMenu) {loadStartMenu()} else
    if (playerWorldMenu) {loadWorldMenu()} else
    if (playerStateMenu) {loadStateMenu()} else

    if (playerHouseMenu) {loadHouseMenu()} else
    if (playerPropertyMenu) {loadPropertyMenu()} else

    if (playerOfficeMenu) {loadOfficeMenu()} else
    if (playerLabMenu) {loadLabMenu()} else
    if (playerGarageMenu) {loadGarageMenu()}
}

//DRAWING MENU'S
//Main Menu's
function loadStartMenu() {
    image(logoImg,width/2,height/2,800,450);
    //UI
    styling();
    //Next Menu Options
    text("Click to Play",windowWidth/2,windowHeight*0.8);
}
function loadWorldMenu() {
    image(worldImg,width/2,height/2,1024,576);
    //UI
    playerInfoUI();
    styling();
    //Title
    textAlign(CENTER);
    textSize(windowHeight/35);
    text("World",windowWidth*0.5,windowHeight/24);
    //Next Menu Options
    textAlign(CENTER);
    text("Choose a State",windowWidth/2,windowHeight*0.8);
}
function loadStateMenu() {
    //UI
    playerInfoUI();
    backButtonUI();
    styling();
    //Title
    textSize(windowHeight/35);
    textAlign(CENTER);
    text("State",windowWidth*0.5,windowHeight/24);
    //Next Menu Options
    text("Go to Property",windowWidth*0.30,windowHeight/2);
    text("Go to House",windowWidth*0.70,windowHeight/2);
}

//State Menu's
function loadHouseMenu() {
    imageMode(CENTER)
    image(houseImg,width/2,height/2,1920,1080);
    //UI
    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();
    //Title
    textSize(windowHeight/35);
    text("House",windowWidth*0.5,windowHeight/24);
    //Next Menu Options
    text("Go to Office",windowWidth*0.25,windowHeight/2);
    text("Go to Lab",windowWidth*0.50,windowHeight/2);
    text("Go to Garage",windowWidth*0.75,windowHeight/2);
}
function loadPropertyMenu() {
    //UI
    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();
    //Title
    textSize(windowHeight/35);
    text("Property",windowWidth*0.5,windowHeight/24);
    //Next Menu Options
    //EMPTY
}

//House Menu's
function loadOfficeMenu() {
    //UI
    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();
    //Title
    textSize(windowHeight/35);
    text("Office",windowWidth*0.5,windowHeight/24);
    //Buttons
    standardButtonUI("Import",60,60);
    standardButtonUI("Export",150,60);
    standardButtonUI("Stats",240,60);
    //Office Menu's
    if (officeMenu1 == true) {
        standardMenuUI();
        standardMenuTitleUI("Import");
        //Display Drugs for Purchase
        image(heroinImg,width*0.2,height*0.4,64,64)
        //Display Price on Drugs
        styling();
        text("$"+heroinBuyPrice,width*0.2,height*0.5);
    }
    if (officeMenu2 == true) {
        standardMenuUI();
        standardMenuTitleUI("Export");
        //Display Drugs for Selling
        image(heroinImg,width*0.2,height*0.4,64,64)
        //Display Price on Drugs
        styling();
        text("$"+heroinSellPrice,width*0.2,height*0.5);
    }
    if (officeMenu3 == true) {
        standardMenuUI();
        standardMenuTitleUI("Stats");
    }
}
function loadLabMenu() {
    imageMode(CENTER)
    image(labImg,width/2,height/2,1920,1080);
    //UI
    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();
    //Title
    textSize(windowHeight/35);
    text("Lab",windowWidth*0.5,windowHeight/24);
    //Buttons
    standardButtonUI("Stash",60,60);
    standardButtonUI("Cook",150,60);
    //Lab Menu's
    if (labMenu1 == true) {
        standardMenuUI();
        standardMenuTitleUI("Stash");
        //Display Drugs
        image(heroinImg,width*0.2,height*0.4,64,64)
        //Display Inventory in Amounts
        styling();
        text("Ingredients "+heroinBuyInventory,width*0.2,height*0.5);
        text("Product "+heroinSellInventory,width*0.2,height*0.53);
    }
    if (labMenu2 == true) {
        standardMenuUI();
        standardMenuTitleUI("Cook");
        //Display Drugs available for Produce
        image(heroinImg,width*0.2,height*0.4,64,64)
        //Display Time to Make
        styling();
        text("Time to make",width*0.2,height*0.5);
        text(heroinProduceTime + " Seconds",width*0.2,height*0.53);
    }
}
function loadGarageMenu() {
    imageMode(CENTER)
    image(garageImg,width/2,height/2,1920,1080);
    //UI
    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();
    //Title
    textSize(windowHeight/35);
    text("Garage",windowWidth*0.5,windowHeight/24);
    //Buttons
    standardButtonUI("Cars",60,60);
    standardButtonUI("Sell",150,60);
    //Garage Menu's
    if (garageMenu1 == true) {
        standardMenuUI();
        standardMenuTitleUI("Cars");
    }
    if (garageMenu2 == true) {
        standardMenuUI();
        standardMenuTitleUI("Sell");
    }
}

//MENU SWITCH TRIGGERS
function mousePressed() {
    //Next Menu
    if (mouseY < height*0.85) {
    nextMenu();
    }
    //Last Menu
    if (mouseX > width-height*0.15 && mouseY > height*0.85) {
        lastMenu();
    }
    //Menu Button Pressed
    //Button 1
    if (mouseX > 60-32.5 && mouseX < 60+32.5 && mouseY > height*0.925-32.5 && mouseY < height*0.925+32.5) {
        if (playerOfficeMenu) {
            closeOLGMenus();
            officeMenu1 = true;
        }
        if (playerLabMenu) {
            closeOLGMenus();
            labMenu1 = true;
        }
        if (playerGarageMenu) {
            closeOLGMenus();
            garageMenu1 = true;
        }
    }
    //Button 2
    if (mouseX > 150-32.5 && mouseX < 150+32.5 && mouseY > height*0.925-32.5 && mouseY < height*0.925+32.5) {
        if (playerOfficeMenu) {
            closeOLGMenus();
            officeMenu2 = true;
        }
        if (playerLabMenu) {
            closeOLGMenus();
            labMenu2 = true;
        }
        if (playerGarageMenu) {
            closeOLGMenus();
            garageMenu2 = true;
        }
    }
    //Button 3
    if (mouseX > 240-32.5 && mouseX < 240+32.5 && mouseY > height*0.925-32.5 && mouseY < height*0.925+32.5) {
        if (playerOfficeMenu) {
            closeOLGMenus();
            officeMenu3 = true;
        }
    }
    //OFFICE IMPORT - Click on Drug
    if (mouseX > width*0.2-32 && mouseX < width*0.2+32 && mouseY > height*0.4-32 && mouseY < height*0.4+32) {
        if (officeMenu1) {
            if (moneyBalance >= heroinBuyPrice) {
                moneyBalance = moneyBalance - heroinBuyPrice;
                heroinBuyInventory++;
            }
        }
        if (officeMenu2) {
            if (heroinSellInventory >= 1) {
                heroinSellInventory--;
                moneyBalance = moneyBalance + heroinSellPrice;
            }
        }
    }
    //LAB PRODUCE
    if (mouseX > width*0.2-32 && mouseX < width*0.2+32 && mouseY > height*0.4-32 && mouseY < height*0.4+32) {
        if (labMenu1) {
            
        }
        if (labMenu2) {
            if (heroinBuyInventory >= 1 && cookArray.length <= 4) {
                heroinBuyInventory--;
                temp = new Heroin();
                cookArray.push(temp);
            }
        }
    }
}

function closeOLGMenus() {
    officeMenu1 = false;
    officeMenu2 = false;
    officeMenu3 = false;
    labMenu1 = false;
    labMenu2 = false;
    garageMenu1 = false;
    garageMenu2 = false;
}