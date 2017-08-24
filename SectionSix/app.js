//IIFE
var budgetController = (function() {
//the following is private bc it is in the closure:
//can only call on it publicly by budgetController.publicTest(b) (this will essentially add b to 23)
	var x = 23;

	var add = function(a) {
		return x + a;
	}

	return {
		publicTest: function(b) {
			return add(b);
		}
	}

})();




//another IIFE (to separate this code from the last code)
var UIController = (function() {
	//some code

})();




//another IIFE
var controller = (function(budgetCtrl, UICtrl) {

	var z = budgetCtrl.publicTest(5);
	return {
		anotherPublic: function() {
			console.log(z);
		}
	}

})(budgetController, UIController);

