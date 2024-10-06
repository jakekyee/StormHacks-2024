var posx = 0;
var currentposx = 27;
var iteration = 0;
var flipiteration = 2;
var flipflag = 1;
function idleanim() {
    // console.log(iteration);
    if (iteration == 40) {
    
    posx = (Math.floor(Math.random()*15) + 17)
    iteration = 0;

    flipanim();
    setTimeout(()=>{idleanim()}, 5000);
    
    }
    else {
    iteration = iteration + 1;
    currentposx = (currentposx + currentposx + posx)/3
    document.getElementById("mon").style = "width:50%; top:50%; position:absolute; left:" + currentposx + "%;" + "transform:rotateY("+ flipiteration + "deg);";
    setTimeout(()=>{idleanim()}, 40);
    }
}

function flipanim(){
    console.log(flipiteration);

    if (flipiteration % 180 == 0) {
        flipiteration = flipiteration + 2;

    }
    else {
    document.getElementById("mon").style = "width:50%; top:50%; position:absolute; left:" + currentposx + "%;" + "transform:rotateY("+ flipiteration + "deg);";
    flipiteration = flipiteration + 2;
    setTimeout(()=>{flipanim()}, 10);
    }



}