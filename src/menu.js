var menuflag = 0;
var shopflag = 0;
var statflag = 0;
var setflag = 0;


function showprice(amount) {
document.getElementById("price").innerHTML = " - " + (amount);
document.getElementById("price").style = "color:red;";
}

function hideprice() {
document.getElementById("price").innerHTML = "";
document.getElementById("price").style = "color:red;";
}



function menustuff() {
    if (menuflag == 0) {
        menuflag = 1;
        openmenu();
    }
    else {
        menuflag = 0;
        closemenu();
    }

}

function openmenu() {
    document.getElementById("menubutton").innerHTML = "✖";
    document.getElementById("menu").style = "display:grid";

}

function closemenu() {
    document.getElementById("menubutton").innerHTML = "☰";
    document.getElementById("menu").style = "display:none";
}

function closemainbuttons() {
    document.getElementById("shopbutton").style = "display:none;"
    document.getElementById("statbutton").style = "display:none;"
    document.getElementById("settingbutton").style = "display:none;"


}
function openmainbuttons() {
    document.getElementById("shopbutton").style = "display:grid;";
    document.getElementById("statbutton").style = "display:grid;";
    document.getElementById("settingbutton").style = "display:grid;";


}


function shopstuff() {

    if (shopflag == 0) {
        shopflag = 1;
        closemainbuttons();
        openshop();
    }
    else {
        shopflag = 0;
        closeshop();
        openmainbuttons();
    }
}


function openshop() {
    document.getElementById("shop1").style.display = "grid";
    document.getElementById("shop2").style.display = "grid";
    document.getElementById("shop3").style.display = "grid";
    document.getElementById("shop4").style.display = "grid";
    document.getElementById("shop5").style.display = "grid";
    document.getElementById("shop6").style.display = "grid";
}

function closeshop() {
    document.getElementById("shop1").style.display = "none";
    document.getElementById("shop2").style.display = "none";
    document.getElementById("shop3").style.display = "none";
    document.getElementById("shop4").style.display = "none";
    document.getElementById("shop5").style.display = "none";
    document.getElementById("shop6").style.display = "none";
}

function statstuff() {
    if (statflag == 0) {
        statflag = 1;
        closemainbuttons();
        openstat();
    }
    else {
        statflag = 0;
        closestat();
        openmainbuttons();
    }

}

function openstat() {
    
    document.getElementById("stat1").style = "display:grid;";
    document.getElementById("stat2").style = "display:grid;";
    document.getElementById("stat3").style = "display:grid;";
}
function closestat(){
    document.getElementById("stat1").style = "display:none;";
    document.getElementById("stat2").style = "display:none;";
    document.getElementById("stat3").style = "display:none;";
}

function setstuff(){
    if (setflag == 0) {
        setflag = 1;
        closemainbuttons();
        openset();
    }
    else {
        setflag = 0;
        closeset();
        openmainbuttons();
    }
}

function openset(){
    document.getElementById("set1").style = "display:grid;";
    document.getElementById("set2").style = "display:grid;";
    document.getElementById("set3").style = "display:grid;";
}

function closeset(){
    document.getElementById("set1").style = "display:none;";
    document.getElementById("set2").style = "display:none;";
    document.getElementById("set3").style = "display:none;";
    document.getElementById("set4").style = "display:none;";

}
