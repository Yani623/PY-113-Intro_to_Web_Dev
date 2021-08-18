// Generate random numbers between 1 and 7:

let score1 = 0;
let score2 = 0; 

let turn = 1;
var lastTurn = 6;

function diceBattle(){
    if (turn < lastTurn){
        var player1 =  Math.floor(Math.random() * 6) + 1;
        var player2 =  Math.floor(Math.random() * 6) + 1;
        document.querySelectorAll(".dieValue")[0].innerText = player1;
        score1 += player1;
        document.querySelectorAll(".dieValue")[1].innerText =  player2;
        score2 += player2;
        document.querySelector(".score1").innerText = `Score = ${score1}`;
        document.querySelector(".score2").innerText = `Score = ${score2}`;
        turn += 1
    }
    else if (turn == lastTurn){
        if (score1 > score2){
            // alert("Player 1 Won!")
            document.querySelector("#winner").innerText = "Player 1 is the Winner!"
            turn = 1;
            score1 = 0;
            score2 = 0;
            document.querySelector("#player1").innerText = "";
            document.querySelector("#player2").innerText = "";
            document.querySelector(".score1").innerText = "";
            document.querySelector(".score2").innerText = "";
            document.querySelector("#die1").innerText = "";
            document.querySelector("#die2").innerText = "";
            document.querySelector(".clickRoll").innerText = "Play Again";
        }
        else if (score1  ==  score2) {
            document.querySelector("#winner").innerText = "It's a Tie!"
            turn = 1;
            score1 = 0;
            score2 = 0;
            document.querySelector("#player1").innerText = "";
            document.querySelector("#player2").innerText = "";
            document.querySelector(".score1").innerText = "";
            document.querySelector(".score2").innerText = "";
            document.querySelector("#die1").innerText = "";
            document.querySelector("#die2").innerText = "";
            document.querySelector(".clickRoll").innerText = "Play Again";
        }
        else {
            document.querySelector("#winner").innerText = "Player 2 is the Winner!"
            document.querySelector("#player1").innerText = "";
            document.querySelector("#player2").innerText = "";
            document.querySelector(".score1").innerText = "";
            document.querySelector(".score2").innerText = "";
            document.querySelector("#die1").innerText = "";
            document.querySelector("#die2").innerText = "";
            turn = 1;
            score1 = 0;
            score2 = 0;
            document.querySelector(".clickRoll").innerText = "Play Again!";
        }
    }
    else if (turn == lastTurn + 1) {
        

    }
}

// change button text to "play again"
var buttonText = document.querySelector(".clickRoll").innerText;
if (buttonText == "Play Again"){
    document.querySelector("#winner").innerText = ""; 
    turn = 1;
    score1 = 0;
    score2 = 0;
    diceBattle();
}


