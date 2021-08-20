/// <reference path="../typings/globals/jquery/index.d.ts" />

var x = "x.png"
var o = "o.png"

let begin = true;
console.log(begin);
const boxLi = []
// Start button toggles from "Start Game" to "Restart" and resets clicks. 
$(".begin").click(()=> {
    if (($(".begin").text()) == "Start Game"){
        $(".img-fluid").attr("src", "");
        $(".begin").text("Restart");
        begin = false;
        console.log(begin);
        }
    else {
        $(".r1-c1").attr("src", x);
        $(".r1-c2").attr("src", o);
        $(".r1-c3").attr("src", x);
        $(".r2-c1").attr("src", o);
        $(".r2-c2").attr("src", x);
        $(".r2-c3").attr("src", o);
        $(".r3-c1").attr("src", x);
        $(".r3-c2").attr("src", o);
        $(".r3-c3").attr("src", x);
        $(".begin").text("Start Game");
        begin = true;
        console.log(begin);
        boxLI = []
        }
});

// This identifies which square the player clicked on (Only after the game is started):
var turn = 1;

$(".grid").click((box)=>{
    if (begin == false && turn < 10){
        var id = box.target.id;
        console.log((id));
        var imgID = "." + id;
        var boxID = "#" + id;
        console.log(imgID);
        console.log(boxID);    
    // Game Begins:
        // Determines if the box is already taken:
        if (id.length > 2){ 
            // 1st Players Turn:
            if (turn % 2 != 0){ 
                console.log(`This was turn ${turn}`)
                $(imgID).attr("src", x);
                turn++;
                boxLi.push(imgID)
                console.log(`Now its turn ${turn}`)
            }
                // 2nd Players Turn:
            else if (turn % 2 == 0) {
                console.log(`This was turn ${turn}`)
                $(imgID).attr("src", o);
                turn++;
                boxLi.push(imgID,boxID)
                console.log(`Now its turn ${turn}`)
            }
        }
    };
});