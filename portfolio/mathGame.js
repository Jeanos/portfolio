var num1text = document.querySelector("#num1");
var num2text = document.querySelector("#num2");
var start= document.querySelector("#start");
var answerDisplay = document.querySelector("#answerId");
var setMinuteInput = document.querySelector("#setMinute");
var setMinute = setMinuteInput;
var gameTimeOut = false;
var stopTimerBtn = document.querySelector("#stopTimer");
var player1Display = document.querySelector("#player1");
var player2Display = document.querySelector("#player2");
var badgeplayer1Display = document.querySelector("#badgePlayer1");
var	badgePlayer1=badgeplayer1Display;
var player1=player1Display;
var minutes;
var seconds;
var playMinutes;
var handle;
num1=num1text;
num2=num2text;
var answer;
answer = answerDisplay;




player1.addEventListener("change",function(){
	if(player1.value == answer){
		player1.classList.add("win");
		answerShow();
		stopTimer();
		resetTimer();
		badgePlayer1++;
	}
	resetTimer();
});
stopTimerBtn.addEventListener("click",function(){
	stopTimer();
});
setMinute.addEventListener("change",function(){
	setMinute = setMinuteInput.value;
	console.log(setMinute);
});

start.addEventListener("click", function(){
	timer();
	randomNumber();

});

function answerShow(){
	answer = (Number(num1.textContent) * Number(num2.textContent));
	answerDisplay.textContent = answer;
}

function randomNumber(){
	var num1Random = Math.floor(Math.random() * 256);
	var num2Random = Math.floor(Math.random() * 256);
	num1.textContent = num1Random;
	num2.textContent = num2Random;
	answer = num1Random * num2Random;

}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    	handle  = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }else if (timer == 0) {
			duration=0;
			gameTimeOut = true;
			answerShow();
			resetTimer();
			stopTimer();
        }
    }, 1000);		
}

function stopTimer(){
	clearInterval(handle);
}

function timer(){
	playMinutes = 60 * setMinute,
    display = document.querySelector('#time');
    startTimer(playMinutes, display);
}

function resetTimer(){
	minutes=0;
	seconds=0;
	display.textContent = minutes + ":" + seconds;
}