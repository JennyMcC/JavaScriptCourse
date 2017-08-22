// Challenge 4: Questions Game

// My Solution:
/*
var Question = function(questionAsked, options, correctAnswer) {
	this.questionAsked = questionAsked;
	this.options = options;
	this.correctAnswer = correctAnswer;
}

var question1 = new Question('Who is the creator of this game?', '1.Your Mom  2.Jenny  3.Stephen Hawking, obviously', 2);
var question2 = new Question('How many siblings does Jenny have?', '1.Two  2.Zero  3.Four', 1);
var question3 = new Question('Where did Jenny go to college?', '1.University of Miami  2.Harvard  3.Miami University', 3);

var myQuestions = [question1, question2, question3];

var whichQuestion = Math.floor(Math.random() * 3) + 1;
		if (whichQuestion === 1) {
			console.log(question1.questionAsked);
			console.log(question1.options);
		} else if (whichQuestion === 2) {
			console.log(question2.questionAsked);
			console.log(question2.options);
		} else if (whichQuestion === 3) {
			console.log(question3.questionAsked);
			console.log(question3.options);
		}
	
var enterAnswer = prompt('Enter the number of the correct answer:');
	//for (var i = 0; i <= myQuestions.length; i++) {
		if (enterAnswer === this.correctAnswer) {
			console.log('Correct!');
		} else if (enterAnswer !== this.correctAnswer) {
			console.log('You know nothing.');
		}
	//}
*/




/////////////////////////////////////////////////////////////////
// His solution:

// ensures code is private and doesn't interfere with other programmers code (IIFE):
(function() {
function Question(question, answers, correct) {
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

Question.prototype.displayQuestion = function() {
	console.log(this.question);

	for (var i = 0; i < this.answers.length; i++) {
		console.log(i + ': ' + this.answers[i]);
	}
}

Question.prototype.checkAnswer = function(ans) {
	if (ans === this.correct) {
		console.log('Correct Answer!');
	} else {
		console.log('Wrong answer. Try again.');
	}
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?',
						['Yes', 'No'],
						0);
var q2 = new Question('What is the name of this course\'s teacher?', 
						['John', 'Michael', 'Jonas'],
						2);
var q3 = new Question('What word best describes coding?',
						['Boring', 'Hard', 'Fun', 'Tedious'],
						2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer:'));

questions[n].checkAnswer(answer);
})();







