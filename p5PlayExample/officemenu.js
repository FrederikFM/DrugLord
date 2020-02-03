function loadOfficeMenu() {
    
    imageMode(CENTER)
    image(officeImg,width/2,height/2,1920,1080);

    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();

    textSize(windowHeight/35);
    text("Office",windowWidth*0.5,windowHeight/24);

    standardButtonUI1("Import",false);
    standardButtonUI2("Export",false);
    standardButtonUI3("Stats",false);
  
    //OFFICE MENUS
    if (officeMenu1 == true) {
        
        standardMenuUI();
      
        standardButtonUI1("Import",true);
        standardButtonUI2("Export",false);
        standardButtonUI3("Stats",false);
        
        for (i=0; i<drugArray.length; i++) {
        //image(drugArray[i].image,((i+1)*width/(cookArray.length+1)),height*0.4,64,64)
        styling();
        text("Buy for $"+drugArray[i].buyprice,((i+1)*width/(drugArray.length+1)),height*0.5);
        text("Stock "+drugArray[i].buyinventory,((i+1)*width/(drugArray.length+1)),height*0.53);
        }
    }
    if (officeMenu2 == true) {
        
        standardMenuUI();
      
        standardButtonUI1("Import",false);
        standardButtonUI2("Export",true);
        standardButtonUI3("Stats",false);
        
        for (i=0; i<drugArray.length; i++) {
        //image(drugArray[i].image,((i+1)*width/(cookArray.length+1)),height*0.4,64,64)
        styling();
        text("Export for $"+drugArray[i].sellprice,((i+1)*width/(drugArray.length+1)),height*0.5);
        text("Stock: "+drugArray[i].sellinventory,((i+1)*width/(drugArray.length+1)),height*0.53);
        }
    }
    if (officeMenu3 == true) {
        
        standardMenuUI();
      
        standardButtonUI1("Import",false);
        standardButtonUI2("Export",false);
        standardButtonUI3("Stats",true);
        
    }
}



let exportMax = 10;

let spaceExport;
let spaceExport2;

//Export
let exportArray = [];

function exportDetection() {
  
    for (let i = exportArray.length-1; i>=0; i--) {
      
        exportArray[i].runonce();
        exportArray[i].timer();
        exportArray[i].timeRemaining();
        exportArray[i].display();
      
        //X and Y values of Rows and Coloums
        if (i + 1 <= 5) {
            if (exportArray.length > 5) {
                spaceExport2 = width/(exportArray.length-4);
            }
            else
            {
                spaceExport = width/(exportArray.length+1);
            }
            exportArray[i].y = height*0.3;
            exportArray[i].x = (i+1)*spaceExport;
        }
        else
        {
            spaceExport2 = width/(exportArray.length-4);
            exportArray[i].y = height*0.55;
            exportArray[i].x = (i-4)*spaceExport2;
        }
    }
}

//Export Class
class Export {
    constructor(drug,car) {
        this.setup = true;
        this.cookTimeRemaining = 0;
        this.tempTimer = -1;
        this.exportFinished = false;
        this.x = 0;
        this.y = 0;
        this.drug = drug;
        this.car = car;
        this.value = drugArray[this.drug].sellprice * carArray[this.car].multivalue;
        this.speed = drugArray[this.drug].prodtime * carArray[this.car].speed;
    }
    runonce() {
        if (this.setup === true) {
            //Set timer
            this.tempTimer = millis();
          
            //Setup Finished
            this.setup = false;
        }
    }
    timer() {
        if (!this.exportFinished) {
            if (millis() - this.tempTimer >= this.speed) {
                this.exportFinished = true;
            }
        }   
    }
    timeRemaining() {
        if (!this.exportFinished) {
            this.cookTimeRemaining = (millis() - this.tempTimer);
        } else
        this.cookTimeRemaining = "Done";
    }
    display() {
        if (playerOfficeMenu && !officeMenu1 && !officeMenu2) {
            //Display Drugs
            //image(drugArray[0].image,this.x,this.y,64,64)
            //Display Time Remaining
            styling();
            if (!this.exportFinished) {
                fill(0,0,0);
                text("Exporting " + drugArray[this.drug].name,this.x,this.y+(height*0.1));
                text((ceil((this.speed-this.cookTimeRemaining)/1000)) + "s",this.x,this.y+(height*0.13));
                text("$"+(this.value),this.x,this.y+(height*0.16));
            } else
            if (this.exportFinished) {
                fill(0,0,0);
                text(drugArray[this.drug].name + " Exported",this.x,this.y+(height*0.1));
                text("$"+(this.value),this.x,this.y+(height*0.13));
            }
        }
    }
}

function mousePressedOfficemenu() {
    //OFFICE IMPORT - Click on Drug
    if (officeMenu1) {
        for (let i=0; i<drugArray.length; i++) {
             if (mouseX > (i+1)*width/(drugArray.length+1)-32 && mouseX < (i+1)*width/(drugArray.length+1)+32 && mouseY > height*0.4-32 && mouseY < height*0.4+32 && moneyBalance >= drugArray[i].buyprice) {
                drugArray[i].buyinventory++;
                moneyBalance = moneyBalance - (drugArray[i].buyprice);
             }
        }
    }
    if (officeMenu2) {
        for (let i=drugArray.length-1; i>=0; i--) {
            if (mouseX > (i+1)*width/(drugArray.length+1)-32 && mouseX < (i+1)*width/(drugArray.length+1)+32 && mouseY > height*0.4-32 && mouseY < height*0.4+32 && drugArray[i].sellinventory >= 1 && exportArray.length < exportMax) {
               for (j=carArray.length-1; j>=0; j--) {
                    if (carArray[j].equipped) {
                        drugArray[i].sellinventory--;
                        exportArray.push(new Export(i,j));
                    }
                }
            }
        }
    }
    //Collect Money from Exported Drug
    for (let i=exportArray.length-1; i>=0; i--) {
        if (exportArray[i].exportFinished && playerOfficeMenu && !officeMenu1 && !officeMenu2 && mouseX > exportArray[i].x-32 && mouseX < exportArray[i].x+32 && mouseY > exportArray[i].y-32 && mouseY < exportArray[i].y+32) {
            moneyBalance = moneyBalance + exportArray[i].value;
            exportArray.splice(i,1);
        }
    }
}