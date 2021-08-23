
var x = "x.png"
var o = "o.png"

let begin = true;
console.log(begin);
var turn = 0;
const xMoves = []
const oMoves = []
// Start button toggles from "Start Game" to "Restart" and resets clicks. 
$(".begin").click(()=> {
    if (($(".begin").text()) == "Start Game"){
        $(".img-fluid").attr("src", "");
        $(".begin").text("Restart");
        $(".turn").text("Player One's Turn");
        begin = false;
        console.log(begin);
        turn++;
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
        $(".turn").text("");
        $(".player").text("");
        turn = 0;
        xMoves.length = 0;
        oMoves.length = 0;
        }
});

// This identifies which square the player clicked on (Only after the game is started):
var lastTurn = 10
$(".square").click((box)=>{
    if (begin == false && turn < lastTurn){
        var id = box.target.id;
        // console.log((id));
        var imgID = "." + id;
        var boxID = "#" + id;   
    // Game Begins:
        // Determines if the box is already taken:
        console.log(turn)
        if (id.length > 2){ 
            // 1st Players Turn:
            if (turn % 2 != 0){ 
                $(".turn").text("Player Two's Turn");
                $(imgID).attr("src", x);
                turn++;
                xMoves.push(id)
                //This checks to see if any of the winning combinations have been met:
                for (let i = 0; i < (win.length); i ++ ){
                    if (win[i].every(j => xMoves.includes(j) )){
                        $(".player").text("Player 1 is the Winner!");
                        $(".turn").text("");
                        turn = lastTurn;
                        $(".begin").text("Play Again");
                        console.log(xMoves);
                        console.log(oMoves);
                        xMoves.length = 0;
                        oMoves.length = 0;
                        console.log(xMoves);
                        console.log(oMoves);
                    }
                }
            }
                // 2nd Players Turn:
            else if (turn % 2 == 0) {
                $(".turn").text("Player One's Turn");
                $(imgID).attr("src", o);
                turn++;
                oMoves.push(id)
                for (let i = 0; i < (win.length); i ++ ){
                    if (win[i].every(j => oMoves.includes(j) )){
                        $(".player").text("Player 2 is the Winner!");
                        $(".turn").text("");
                        turn = lastTurn;
                        $(".begin").text("Play Again");
                        console.log(xMoves);
                        console.log(oMoves);
                        xMoves.length = 0;
                        oMoves.length = 0;
                        console.log(xMoves);
                        console.log(oMoves);
                    }
                }
            }
        };
    }
});

// Winning Combinations
const win = [["r1-c1", "r1-c2", "r1-c3"], ["r2-c1", "r2-c2", "r2-c3"],["r3-c1", "r3-c2", "r3-c3"], ["r1-c1", "r2-c1", "r3-c1"], ["r1-c2", "r2-c2", "r3-c2"], ["r1-c3", "r2-c3", "r3-c3"], ["r1-c1", "r2-c2", "r3-c3"], ["r1-c3", "r2-c2", "r3-c1"]] 