//Drug Inventory (Amounts)
let heroinBuyInventory = 0;
let weedBuyInventory = 0;
let cokeBuyInventory = 0;
let mdmaBuyInventory = 0;

//Product Inventory (Amounts)
let heroinSellInventory = 0;
let weedSellInventory = 0;
let cokeSellInventory = 0;
let mdmaSellInventory = 0;

//Drug Buy Prices
let heroinBuyPrice = 40;
let weedBuyPrice = 12;
let cokeBuyPrice = 65;
let mdmaBuyPrice = 45;

//Product Sell Prices
let heroinSellPrice = heroinBuyPrice*1.35;
let weedSellPrice = weedBuyPrice*1.3;
let cokeSellPrice = cokeBuyPrice*1.45;
let mdmaSellPrice = mdmaBuyPrice*1.375;

//Drug Produce Time !!!Miliseconds!!!
let heroinProduceTime = heroinBuyPrice*100;
let weedProduceTime = weedBuyPrice*100;
let cokeProduceTime = cokeBuyPrice*100;
let mdmaProduceTime = mdmaBuyPrice*100;

//Drugs Cooking
let cookArray = [];

function drugCookDetection() {
    for (let i = cookArray.length-1; i>=0; i--) {
        cookArray[i].timer();
        cookArray[i].timeRemaining();
        cookArray[i].display();
        if (cookArray[i].drugFinished && playerLabMenu && !labMenu1 && !labMenu2 && mouseX > cookArray[i].x-32 && mouseX < cookArray[i].x+32 && mouseY > height*0.4-32 && mouseY < height*0.4+32) {
            heroinSellInventory++;
            cookArray.splice(i,1);
        }
    }
}

//Drug Class
class Heroin {
    constructor() {
        this.setup = true;
        this.cookTimeRemaining = 0;
        this.tempTimer = -1;
        this.drugFinished = false;
        this.x = 0;
    }
    timer() {
        if (!this.drugFinished) {
            if (this.setup === true) {
                this.tempTimer = millis();
                this.setup = false;
            }  else
            if (millis() - this.tempTimer >= heroinProduceTime) {
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
            image(heroinImg,this.x,height*0.4,64,64)
            //Display Time Remaining
            styling();
            if (!this.drugFinished) {
                text("Time Remaining",this.x,height*0.5);
                text(ceil(heroinProduceTime-this.cookTimeRemaining)/1000,this.x,height*0.53);
            } else
            text("Product Ready",this.x,height*0.5);
        }
    }
}