
var wins = 0; //code at the end
var losses = 0; //code at the end
var wordsArray = ["nixon", "ford", "roosevelt", "kennedy", "lincoln", "clinton", "obama", "eisenhower", "washington",
					"coolidge", "hoover", "taft"];
var numGuesses;
var selectedWord;
var placeholder;
var userInput;
var lettersGuessed;
var correctGuess;

var x = document.getElementById("Audio"); 

function playAudio() { 
	x.play(); 
	console.log("PLAY");
} 

function pauseAudio() { 
	x.pause(); 
}

function newGame(){
	
	placeholder = [];
	//randomly selects a word in the array
	selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	console.log(selectedWord);

	//for loop turns word into blanks (-----)
		for (var i = 0; i < selectedWord.length; i++){
			placeholder += "_";
	}

	console.log(placeholder);
	document.getElementById("currentword").innerHTML = placeholder;
	document.getElementById("currentword").style.fontSize = "xx-large";
	document.getElementById("currentword").style.padding = "20px";
	document.getElementById("currentword").style.letterSpacing = "15px";

	numGuesses = 15;
	document.getElementById("guessesLeft").innerHTML = numGuesses;

	lettersGuessed = [];
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

	guessLetter();
}

function guessLetter(){

	//letter key input
	document.onkeyup = function(event) {
		userInput = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userInput);
		correctGuess = false;

		// for (var i = 0; i < lettersGuessed.length; i++) {
		// 	if(lettersGuessed[i] == userInput {
		//  		console.log("You already tried " + lettersGuessed[i] + ". Try another letter");
		// 	}
		//  }
		}
		//checks if your letter is in the word
		for (var i = 0; i < selectedWord.length; i++){
			if (userInput == selectedWord.substring(i, i + 1)){

				placeholder = placeholder.substring(0, i) + userInput + placeholder.substring(i + 1, placeholder.length + 1);
				document.getElementById("currentword").innerHTML = placeholder;
				console.log(placeholder);
				correctGuess = true;		
			}
		}
		console.log(correctGuess);

		if (correctGuess){

				for (i = 0; i < lettersGuessed.length; i++){
					if(lettersGuessed[i] == selectedWord.substring(i, i + 1)){
				 		console.log("You already tried " + lettersGuessed[i] + ". Try another letter");
					}
				 }
		} else {
			for (i = 0; i < lettersGuessed.length; i++){
				if(lettersGuessed[i] == selectedWord.substring(i, i + 1)){
			 		console.log("You already tried " + lettersGuessed[i] + ". Try another letter");
				}
			}

			lettersGuessed = lettersGuessed + userInput;
			document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
			document.getElementById("lettersGuessed").style.letterSpacing = "15px";

			numGuesses--;
			document.getElementById("guessesLeft").innerHTML = numGuesses;
		}
		checkIfWon(placeholder, selectedWord);
		//console.log("Current correct guess: " + correctGuess);
	}
}

function checkIfWon(placeholder, selectedWord){
	if (placeholder == selectedWord){
		alert("You guessed " + selectedWord + " correctly! Play again.");
		wins++;
		document.getElementById("wincount").innerHTML = wins;
		document.getElementById("winPic").src="assets/images/obama.jpg";
		newGame();
	}
	if (numGuesses == 0){
		alert("Game Over. You Lose. Try Again. The word was: " + selectedWord);
		losses++;
		document.getElementById("winPic").src="assets/images/trump.jpg";
		document.getElementById("losscount").innerHTML = losses;
		newGame();
	}

}

newGame();
// guessLetter();



