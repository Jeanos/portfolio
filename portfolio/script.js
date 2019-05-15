var divPlayer1 = document.querySelector(".mini-box");
var divPlayer2 = document.querySelector(".mini-box2");
var p1Display 	= document.querySelector("#score1");
var p2Display 	= document.querySelector("#score2");
var gameOver 	= false;
var score1 			= 0;
var score2 			= 0;
var winningScoreInput = document.querySelector("#inputScoreHight");
var winningScore = winningScoreInput;
textDestination	= document.querySelector("#winningScoreDisplay");
winnerDisplay	= document.querySelector("#demo");
var reference	= document.querySelector("#reference");

function goReference(){
    location.href = "reference.html";
}


function validate() {
	// document.getElementById("answertab").classList.add("highlight");
	var x = document.getElementById("answertab");
 		x.classList.add("highlight");
 	var element = document.getElementById("nameh3");
 		element.innerHTML = "Welcome Jean Jacques";
}

function normal() {
	// document.getElementById("answertab").classList.add("highlight");
	var x = document.getElementById("answertab");
	x.classList.toggle("highlight");
	element = document.getElementById("nameh3");
 		element.innerHTML = "Connect your profile";
}

function upScore1(){
	if (gameOver === false){
		score1++;
		if (score1 == winningScore){
			gameOver = true;
			divPlayer1.classList.add("highlight");
			winnerDisplay.textContent = ("Player 1 won");
			winnerDisplay.classList.add("highlight");
		}
		p1Display.textContent = score1;	
	}
}

function upScore2(){
	if (gameOver === false){
		score2++;
		if (score2 == winningScore){
			gameOver = true;
			divPlayer2.classList.add("highlight");
			winnerDisplay.textContent = ("Player 2 won")
			winnerDisplay.classList.add("highlight");
		}
		p2Display.textContent = score2;

	}
}

function reset(){
	divPlayer1.classList.remove("highlight");
	divPlayer2.classList.remove("highlight");
	score1=0;
	score2=0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver= false;
	textDestination.textContent = (winningScore);
	winnerDisplay.textContent = "";

}

winningScoreInput.addEventListener("change",function(){
	winningScore=winningScoreInput.value;
	reset();
	textDestination.textContent=winningScore;
});


