let passcode = Math.floor(Math.random() * 1000);
let tries = 10;
let guess = new Guess();
let then = Date.now();
let timeLeft = 30;
let gameover = false;

function guessNumber(guess) {
	tries--;

	if(guess == passcode) {
		gameover = true;
		printGameOver('WIN');
	}
	
	else if(timeLeft <= 0 && gameover == false) 
		printGameOver('LOSE');	

	else {
		printAttemptsRemaining(tries);
		giveClue(guess);
	}
}

function giveClue(guess) {
	if(guess > passcode)  
		printClue('HI', guess);
	else  
		printClue('LO', guess);	
}

function main() {
	let now = Date.now();
	if(now - then > 1000) 
		printDigits();
	
	requestAnimationFrame(main);
}

main();