let passcode = Math.floor(Math.random()*1000);
let tries = 10;

let attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;

let clueText = document.getElementById("clue");

let button = document.getElementById("guess-button");
let number = document.getElementById("guess-text");
button.addEventListener("click", guessNumber);


function guessNumber() {
	let guess = number.value;
	tries--;

	if(guess == passcode) {
		document.body.innerHTML = "<h1>You Win!</h1>" + "<p>Got it in " + (10 - tries) + " tries.</p>";	
	}
	
	else if(tries > 0) {
		attemptsText.innerHTML = "Number of attempts left: " + tries; 
		giveClue(guess);
	}
	else {
		document.body.innerHTML = "<h1>You Lose!</h1>" + "<p>The number was: " + passcode + "</p>";	
	}
}

function giveClue(guess) {
	if(guess > passcode) {
		clueText.innerHTML += "<li>" + guess + " is too High!</li>";
	}
	
	else { 
		clueText.innerHTML += "<li>" + guess + " is too Low!</li>";
	}
}