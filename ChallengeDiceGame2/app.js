
//declaring variables that will be used throughout: (global scope)
var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

//telling the 'roll dice' button what to do when clicked..'add Event' needs what event(click), followed by the function to be called upon clicking:
//OR you can put the entire function directly after 'click', if you're only using it here (this way, the function doesn't need to be named. just 'function()':
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		//1. Random number:
		//floor rounds the random number down; *6 so we get numbers 0-6; +1 so we get numbers 1-6.
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
	
		//2. Display result:
		//changing the css back to show the dice since it has been rolled now
		//making it a var called diceDOM so we can call on it for whichever number is rolled:
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		
		//images are called 'dice-(whatever number)'. This is how we can tell it to show whatever number is rolled ('+ dice') bc we called the random number 'dice' above
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
	
			//3. Update the round score IF the rolled number was NOT a 1:
			if (dice1 !== 1 && dice2 !== 1) {
				//add score
				roundScore += dice1 + dice2;
				//display the new round score:
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
			} else {
				//next player
				nextPlayer();
			}


			/* OR USE THIS
			if (dice === 6 && lastDice === 6) {
				//player looses score
				scores[activePlayer] = 0;
				document.querySelector('#score-' + activePlayer).textContent = 0;
				nextPlayer();
			} else if (dice !== 1) {
				//add score
				roundScore += dice;
				//display the new round score:
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
			} else {
				//next player
				nextPlayer();
			}

			lastDice = dice;
			*/
	}
});

//adding the Global Score (top portion) when user clicks Hold button:
document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		//1. Add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;
		//same as: scores[activePlayer] = scores[activePlayer] + roundScore;

		//2. Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		var winningScore;

		//undefined, 0, null or "" are COERCED to false
		//anything else is COERCED to true
		if (input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}

		//3. Check if player won the game
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = "Winner!";
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //winner and active ref CSS styling
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
});

function nextPlayer() {
	//WAT. This is the same as writing If, Then(?), Else(:)
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0; //setting the new player to start at 0
	//changing the users score back to a zero when they roll one:
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	//removing and adding(toggle will either remove or add) the red dot next to the players name(showing who's turn it is)
	//calling on an html class 'player-0-panel active'
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	//hiding the dice again if the player rolls a 1
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

//resetting the game when they click the 'new game' button:
document.querySelector('.btn-new').addEventListener('click', init);

//function that starts/resets the game:
function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	//'current-' refrences html where the current score is located; we don't include the 0 or 1 and instead add in the 'activePlayer' so it will add to the active players score
	//document.querySelector('#current-' + activePlayer).textContent = dice;
	//<em> is just italicizing the current score. Must add innerHTML so it doesn't simply print <em>dice</em>
	//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
	//var x = document.querySelector('#score-0').textContent;

	//changing the css to hide the dice when you first load the page(bc we haven't rolled yet)
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	//score and current are the id's in html. do not need to use # to call on them.
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = "Player 1";
	document.getElementById('name-1').textContent = "Player 2";
	//the # is only used when using 'querySelector', if you choose to use 'getElementById' then you don't need it

	//clearing all the 'winner' and 'active player' things to start the game over. (then adding one active player back bc player 0 will start)
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}


////////////////NEW RULES///////////////////////////
