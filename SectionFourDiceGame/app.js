/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

//'current-' refrences html where the current score is located; we don't include the 0 or 1 and instead add in the 'activePlayer' so it will add to the active players score
//document.querySelector('#current-' + activePlayer).textContent = dice;
//<em> is just italicizing the current score. Must add innerHTML so it doesn't simply print <em>dice</em>
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
//var x = document.querySelector('#score-0').textContent;

//changing the css to hide the dice when you first load the page(bc we haven't rolled yet)
document.querySelector('.dice').style.display = 'none';

//score and current are the id's in html. do not need to use # to call on them.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//telling the 'roll dice' button what to do when clicked..'add Event' needs what event(click), followed by the function to be called upon clicking:
//OR you can put the entire function directly after 'click', if you're only using it here (this way, the function doesn't need to be named. just 'function()':
document.querySelector('.btn-roll').addEventListener('click', function() {
	
	//1. Random number:
	//floor rounds the random number down; *6 so we get numbers 0-6; +1 so we get numbers 1-6.
	var dice = Math.floor(Math.random() * 6) + 1;
	
	//2. Display result:
	//changing the css back to show the dice since it has been rolled now
	//making it a var called diceDOM so we can call on it for whichever number is rolled:
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	//images are called 'dice-(whatever number)'. This is how we can tell it to show whatever number is rolled ('+ dice') bc we called the random number 'dice' above
	diceDOM.src = 'dice-' + dice + '.png';
	
	//3. Update the round score IF the rolled number was NOT a 1:
});



















