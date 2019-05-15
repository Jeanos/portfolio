	var colors = generateRandomColors(6);
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var retake = document.getElementById("retakeId");

	var background = document.querySelector(".contentbody");
	colorDisplay.textContent = pickedColor;

// Reset function here
		retake.addEventListener("click", function(){
		
		colors = generateRandomColors(6);
		pickedColor = pickColor();
		for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		}
		colorDisplay.textContent = pickedColor;
		background.style.backgroundColor = "azure";
		retake.textContent="Reset";
	});
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor, pickedColor);
 			if (clickedColor === pickedColor){
 			changecolor(pickedColor);
 			testbadge.value++;
 			testbadge.textContent = testbadge.value;
 			background.style.backgroundColor = pickedColor;
 			retake.textContent="Play Again";
 			} else {
 			this.style.backgroundColor='white';
 			colorDisplay.textContent = ("Try again");
 			}
		});
	}

	function changecolor(color){
		for (var i = 0; i < squares.length; i++){
				squares[i].style.backgroundColor = color;
				colorDisplay.textContent = ("You find it ..")
				}
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}


	function generateRandomColors(num){
		//make array
		var arr = [];
		for (var i = 0; i < num; i++){
			arr.push(randomColor());
		}
		return arr;
		//
	}

	function randomColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}



