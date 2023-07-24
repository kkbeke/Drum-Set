
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');

function playCrash() {
    crash.play();
}
function playkick() {
    kickBass.play();
}
function playsnare() {
    snare.play();
}
function playtom1() {
    tom1.play();
}
function playtom2() {
    tom2.play();
}
function playtom3() {
    tom3.play();
}
function playtom4() {
    tom4.play();
}

for (var i =0; i < numberOfDrumButtons ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       
        this.style.color = "white";
        
    });
}



