
let bgIndex = 0;
let backgroundItems;
function BackgroundItem(name, color = "black", price, mult = 1, owned = false){
    this.name = name;
    this.color = color;
    this.price = price;
    this.mult = mult;
    this.owned = owned;
}

function purchaseBG(num){
    //IF ALREADY OWNS JUST CHANGE INSTEAD
    console.log(num);
    if(backgroundItems[num].owned){
        console.log("test");
        
        changeBg(num);
    }
    //CHECK TO SEE IF YOU HAVE ENOUGH MONEY
    else if(backgroundItems[num].price <= money){
        console.log("test2s ");
        money -= backgroundItems[num].price;
        backgroundItems[num].owned = true;
        document.getElementById("shop" + (num + 2)).onmouseenter = "";

    }
}

function initializeBackgroundItems(){
    backgroundItems = new Array();
    

    //HARD CODE POSSIBLE BACKGROUNDS
    backgroundItems.push(new BackgroundItem("bg0", "#FFFFFF", 0, 1));
    backgroundItems.push(new BackgroundItem("bg1", "#f9fdb2", 100, 1.25));
    backgroundItems.push(new BackgroundItem("bg2", "#ffa29d", 500, 1.5));
    backgroundItems.push(new BackgroundItem("bg3", "#c7ff9d", 1000, 1.75));
    backgroundItems.push(new BackgroundItem("bg4", "#9de4ff", 2000, 2));
}

function changeBg(num){
    //CHANGES BG COLOUR
    bgIndex = num;
    if(backgroundItems[num].owned == true){
        bgIndex = num;
        console.log(backgroundItems[num].name);
        document.getElementById("shop2").style.backgroundColor = "#FFFFFF";
        document.getElementById("shop3").style.backgroundColor = "#FFFFFF";
        document.getElementById("shop4").style.backgroundColor = "#FFFFFF";
        document.getElementById("shop5").style.backgroundColor = "#FFFFFF";
        document.getElementById("shop6").style.backgroundColor = "#FFFFFF";

        document.getElementById("shop" + (num + 2)).style.backgroundColor = "#c7ff9d";
        document.getElementById("multiplier").innerText = backgroundItems[num].mult + "x";
        document.getElementsByTagName("body")[0].style.backgroundColor = (backgroundItems[num].color);

        
    }
}