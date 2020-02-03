let currentMenu = 1;

function loadGarageMenu() {
  
    imageMode(CENTER)
    image(garageImg,width/2,height/2,1920,1080);
    
    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();
    
    textSize(windowHeight/35);
    text("Garage",windowWidth*0.5,windowHeight/24);
  
    standardButtonUI1("Cars",false);
    standardButtonUI2("Sell",false);
    standardButtonUI3("Boost",false);
  
  //GARAGE MENUS
    if (garageMenu1 == true) {
        
        standardMenuUI();
      
        standardButtonUI1("Cars",true);
        standardButtonUI2("Sell",false);
        standardButtonUI3("Boost",false);
      
            
            fill(255,255,255,255);
            text(carArray[currentMenu].name,width/2,height*0.3);
            if (carArray[currentMenu].equipped) {
                buyButtonUI("Equipped",width/2);
            } else
            if (carArray[currentMenu].bought) {
                buyButtonUI("Equip",width/2);
            } else
            if (!carArray[currentMenu].bought) {
                buyButtonUI("Buy $"+carArray[currentMenu].price,width/2);
            }
            //image(carArray[currentMenu].image,width*0.5,height*0.5,128,128)
            carMenuStats();
          
            fill(40,40,40,240);
            rect(width*0.1,height*0.45,width*0.1,height*0.6);
            rect(width*0.9,height*0.45,width*0.1,height*0.6);
            fill(250,250,250,255);
            triangle(width*0.08,height*0.45,width*0.12,height*0.42,width*0.12,height*0.48);
            triangle(width*0.92,height*0.45,width*0.88,height*0.42,width*0.88,height*0.48);
            
    }
    if (garageMenu2 == true) {
      
        standardMenuUI();
      
        standardButtonUI1("Cars",false);
        standardButtonUI2("Sell",true);
        standardButtonUI3("Boost",false);
        
    }
    if (garageMenu3 == true) {
      
        standardMenuUI();
      
        standardButtonUI1("Cars",false);
        standardButtonUI2("Sell",false);
        standardButtonUI3("Boost",true);
        
    }
}

function carMenuStats() {
    
}

function unequipCars() {
    for (i=0; i<carArray.length; i++) {
        carArray[i].equipped = false;
    }
}

function mousePressedGaragemenu() {
  
    if (garageMenu1) {
      
        //Previous Car
        if (currentMenu >= 2 && mouseX > width*0.1-width*0.05 && mouseX < width*0.1+width*0.05 && mouseY > height*0.45-height*0.3 && mouseY < height*0.45+height*0.3) {
            currentMenu--;
        }
        //Next Car
        if (currentMenu <= carArray.length-2 && mouseX > width*0.9-width*0.05 && mouseX < width*0.9+width*0.05 && mouseY > height*0.45-height*0.3 && mouseY < height*0.45+height*0.3) {
            currentMenu++;
        }
        }
        if (garageMenu1 && mouseX > width/2-(135/2) && mouseX < width/2+(135/2) && mouseY > height*0.695-(35/2) && mouseY < height*0.695+(35/2)) {
            if (carArray[currentMenu].bought && !carArray[currentMenu].equipped) {
                unequipCars();
                carArray[currentMenu].equipped = true;
            } else
            if (!carArray[currentMenu].bought && moneyBalance >= carArray[currentMenu].price) {
                carArray[currentMenu].bought = true;
                moneyBalance = moneyBalance - carArray[currentMenu].price;
            }
        }
}