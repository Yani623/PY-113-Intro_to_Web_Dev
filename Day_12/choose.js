function pokemon1a(){
    document.getElementById("pokeball1").innerText= "Bulbasour";
    document.getElementById("pokeball1").style.opacity= "1";
}

function pokemon1b(){
    document.getElementById("pokeball1").innerText= "Pokemon 1";
    document.getElementById("pokeball1").style.opacity= "0.6";
}

function pokemon2a(){
    document.getElementById("pokeball2").innerText= "Squirtle";
    document.getElementById("pokeball2").style.opacity= "1";
}

function pokemon2b(){
    document.getElementById("pokeball2").innerText= "Pokemon 2";
    document.getElementById("pokeball2").style.opacity= "0.6";
}

function pokemon3a(){
    document.getElementById("pokeball3").innerText= "Charmander";
    document.getElementById("pokeball3").style.opacity= "1";
}

function pokemon3b(){
    document.getElementById("pokeball3").innerText= "Pokemon 3";
    document.getElementById("pokeball3").style.opacity= "0.6";
}

var bulbasaur = ["pb1", "bulbasaur.png"]
var squirtle = ["pb2", "squirtle.png"]
var charmander = ["pb3", "charmander.png"]


function openPokeball([boop, boop2]) {
    document.getElementById(boop).src= boop2 ;
}

// function openPokeball(boop) {
//     document.getElementByClass("image-fluid")[0].src= boop ;
// }