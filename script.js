function start () {
    location.reload();
}
var characater =
document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate"){
    characater.classList.add("animate");
    }

    setTimeout(function(){
        character.classList.remove("animate");
},500);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 &&
        characterTop>=130){
            block.style.animation ="none";
            block.style.display = "none";
            alert("😈 hahaaaaaa yo dumb ass lost! 👺.")
        }

    let gameOver = false;
    function endGame(loser) {}
},10);