function loadLabMenu() {
    
    imageMode(CENTER)
    image(labImg,width/2,height/2,1920,1080);
    
    topBottomUI();
    playerInfoUI();
    backButtonUI();
    styling();
    
    textSize(windowHeight/35);
    text("Lab",windowWidth*0.5,windowHeight/24);
    
    standardButtonUI1("Stash",false);
    standardButtonUI2("Cook",false);
  
    //LAB MENUS
    if (labMenu1 == true) {
        
        standardMenuUI();
    
        standardButtonUI1("Stash",true);
        standardButtonUI2("Cook",false);
  
        for (i=0; i<drugArray.length; i++) {
        //image(drugArray[i].image,((i+1)*width/(cookArray.length+1)),height*0.4,64,64)
        styling();
        text("Ingredients "+drugArray[i].buyinventory,((i+1)*width/(drugArray.length+1)),height*0.5);
        text("Product "+drugArray[i].sellinventory,((i+1)*width/(drugArray.length+1)),height*0.53);
        }
        
    }
    if (labMenu2 == true) {
        
        standardMenuUI();
            
        standardButtonUI1("Stash",false);
        standardButtonUI2("Cook",true);
  
        for (i=0; i<drugArray.length; i++) {
        //image(drugArray[i].image,((i+1)*width/(cookArray.length+1)),height*0.4,64,64)
        styling();
        text("Time to make",((i+1)*width/(drugArray.length+1)),height*0.5);
        text(drugArray[i].prodtime/1000 + " Seconds",((i+1)*width/(drugArray.length+1)),height*0.53);
        }
    }
}



let cookMax = 10;

let spaceDrugs;
let spaceDrugs2;

//Drugs Cooking
let cookArray = [];

function drugCookDetection() {
    for (let i = cookArray.length-1; i>=0; i--) {
        cookArray[i].timer();
        cookArray[i].timeRemaining();
        cookArray[i].display();
        if (cookArray[i].drugFinished && playerLabMenu && !labMenu1 && !labMenu2 && mouseX > cookArray[i].x-32 && mouseX < cookArray[i].x+32 && mouseY > cookArray[i].y-32 && mouseY < cookArray[i].y+32) {
            cookArray[0].sellinventory++;
            cookArray.splice(i,1);
        }
        //Making Columns/Rows Perfect
        if (i + 1 <= 5) {
            if (cookArray.length > 5) {
                spaceDrugs2 = width/(cookArray.length-4);
            }  else  {
                spaceDrugs = width/(cookArray.length+1);
            }
            cookArray[i].y = height*0.3;
            cookArray[i].x = (i+1)*spaceDrugs;
            }  else  {
            cookArray[i].y = height*0.55;
            spaceDrugs2 = width/(cookArray.length-4);
            cookArray[i].x = (i-4)*spaceDrugs2;
        } 
    }
}

//Drug Class
class DrugCooking {
    constructor(drug) {
        this.setup = true;
        this.cookTimeRemaining = 0;
        this.tempTimer = -1;
        this.drugFinished = false;
        this.x = 0;
        this.y = height*0.4
        this.drug = drug;
    }
    timer() {
        if (!this.drugFinished) {
            if (this.setup === true) {
                this.tempTimer = millis();
                this.setup = false;
            }  else
            if (millis() - this.tempTimer >= drugArray[this.drug].prodtime) {
                this.drugFinished = true;
            }
        }   
    }
    timeRemaining() {
        if (!this.drugFinished) {
            this.cookTimeRemaining = (millis() - this.tempTimer);
        } else
        this.cookTimeRemaining = "Done";
    }
    display() {
        if (playerLabMenu && !labMenu1 && !labMenu2) {
            //Display Drugs
            //image(drugArray[0].image,this.x,this.y,64,64)
            //Display Time Remaining
            styling();
            if (!this.drugFinished) {
                text("Cooking Drug",this.x,this.y+(height*0.1));
                text((ceil((drugArray[this.drug].prodtime-this.cookTimeRemaining)/1000) + "s"),this.x,this.y+(height*0.13));
            } else
            text("Drug Ready",this.x,this.y+(height*0.1));
        }
    }
}

function mousePressedLabmenu() {
    if (labMenu1) {
          
    }
    if (labMenu2) {
        for (i=0; i<drugArray.length; i++) {
             if (mouseX > (i+1)*width/(drugArray.length+1)-32 && mouseX < (i+1)*width/(drugArray.length+1)+32 && mouseY > height*0.4-32 && mouseY < height*0.4+32 && cookArray.length <= cookMax - 1) {
                drugArray[i].buyinventory--;
                cookArray.push(new DrugCooking(i));
            }
        }
    }
}
