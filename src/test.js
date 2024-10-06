let totalmovement = 0
let money = 0;
let myPet;



function main(petname){
    
    document.getElementById("title").innerHTML ="cuh";
    myPet = new pet(document.getElementById("mon"), "./mon0/", 0, 0, 5000, petname, 5);
    document.getElementById("name").innerText = myPet.name;
    idleanim();
    initializeBackgroundItems()
}

function makenew(){
    var tempname = document.getElementById("nameinput").value;
    main(tempname);
}

function trueorfalse(input) {
    if (input == "true") {
        return true;
    }
    else {
        return false;
    }
}

function importdata(){
    initializeBackgroundItems();
    var tempdata = document.getElementById("datainput").value;
    var temparray = tempdata.split("|"); 
    money = parseInt(temparray[0]);
    totalmovement = parseInt(temparray[1]);
    backgroundItems[0].owned  = trueorfalse(temparray[2]);
    backgroundItems[1].owned = trueorfalse(temparray[3]);
    backgroundItems[2].owned = trueorfalse(temparray[4]);
    backgroundItems[3].owned = trueorfalse(temparray[5]);
    backgroundItems[4].owned = trueorfalse(temparray[6]);

    for (var n = 0; n < 5; n++) {
        if (backgroundItems[n].owned ) {
            document.getElementById("shop" + (n + 2)).onmouseenter = "";
        }
    }

    //temparray[10]
    myPet = new pet(document.getElementById("mon"), temparray[7], parseInt(temparray[8]), parseInt(temparray[9]), temparray[10], temparray[11], temparray[12]);
    exp(1);
    document.getElementById("name").innerText = myPet.name;
    idleanim();
}



function prestige() {
    var random = Math.floor(Math.random()*4);
    while (random == parseInt(myPet.imgPaths[5])) {
        random = Math.floor(Math.random()*4);
    }
    myPet = new pet(document.getElementById("mon"), "./mon" + random + "/", 0, 0, 5000, " ", 5);
    money = 0;
    document.getElementById("name").innerText = myPet.name;
    
}


function savestuff() {
    var exportstring = "";
    exportstring = exportstring + money + "|";
    exportstring = exportstring + totalmovement + "|";
    //bgstuff
    exportstring = exportstring + backgroundItems[0].owned + "|";
    exportstring = exportstring + backgroundItems[1].owned + "|";
    exportstring = exportstring + backgroundItems[2].owned + "|";
    exportstring = exportstring + backgroundItems[3].owned + "|";
    exportstring = exportstring + backgroundItems[4].owned + "|";
    //
    exportstring = exportstring + myPet.imgPaths + "|";
    exportstring = exportstring + myPet.level + "|";

    exportstring = exportstring + myPet.xp + "|";
    exportstring = exportstring + myPet.xpCap + "|";
    exportstring = exportstring + myPet.name + "|";
    exportstring = exportstring + myPet.maxlevel;



    document.getElementById("set4").innerHTML = "<input id = 'exportthing' value = '" +exportstring  + "'></p>";
    document.getElementById("exportthing").style = " font-size:10px; font-family:monospace;";
    document.getElementById("set4").style = "display:block; position:absolute; top:30%; left:25%;";
    console.log(exportstring);  

}

function exp(experience){
    myPet.xpGain(experience * backgroundItems[bgIndex].mult);

    totalmovement = totalmovement + experience;
    document.getElementById("stat3").innerHTML = "<p style='font-family:monospace'>"+ totalmovement + "<p/>";

    
    document.getElementById("title").innerHTML = progressbar(myPet.xp, myPet.xpCap);
    document.getElementById("percentage").innerHTML = myPet.xp + "/" + myPet.xpCap;
}

function inc(income) {
    money = money + Math.floor(income*backgroundItems[bgIndex].mult/5);
    document.getElementById("money").innerText = money;
}




function progressbar(one, two) {
    let s = "[";
    for (let i = 0; i < 20; i++) {
        if (i/20 < (one/two)) {
            s = s  + "#";
        }
        else {
            s = s + ".";

        }
        

    }
    s = s + "]";
    return s;
}

