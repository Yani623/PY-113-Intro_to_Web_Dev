/// <reference path="../typings/globals/jquery/index.d.ts" />

var x = "x.png"
var o = "o.png"

let clickCount = 0;
console.log(clickCount);

// Start button toggles from "Start Game" to "Restart" and resets clicks. 
$(".begin").click(()=> {
    if (($(".begin").text()) == "Start Game"){
        $(".img-fluid").attr("src", "");
        $(".begin").text("Restart");
        clickCount += 1;
        console.log(clickCount);
        }
    else {
        $(".img-fluid").attr("src", x);
        $(".begin").text("Start Game");
        clickCount = 0;
        console.log(clickCount);
        }
});

// $(".begin").click(()=> {
//     if (clickCount == 0){
//     $(".img-fluid").attr("src", x);
//     $(".begin").text("Begin");
//     clickCount += 1;
//     console.log(clickCount)
//     }
// });




// This identifies which square the player clicked on (Only after the game is started):
$(".grid").click((box)=>{
    if (($(".begin").text()) == "Restart"){
        var id = box.target.id;
        console.log((id));
        var imgID = "." + id;
        var boxID = "#" + id;
        console.log(imgID);
        console.log(boxID);

        // Game Begins:
        
    };
});

// var colID = "." + id1;
// var imgID = "#" + id1;
// console.log(colID);
// console.log(imgID);

// $(colID).click(() => {
// $(imgID).attr("src", x);
// clickCount += 1;
// console.log(clickCount);
// });



// if (clickCount == 1){
//     $(colID).click(() => {
//     $(imgID).attr("src", x);
//     clickCount += 1;
//     console.log(clickCount);
//     });
// };

// // Click to Begin Game:
// if (clickCount == 1 and target.is()){
//     $("#r1-c1").click(() => {
//         $("#11").attr("src", o);
//     });
// };
