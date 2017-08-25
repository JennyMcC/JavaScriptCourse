//IIFE BUDGET CONTROLLER
var budgetController = (function() {
//the following is private bc it is in the closure:
//can only call on it publicly by budgetController.publicTest(b) (this will essentially add b to 23)
	

})();




// UI CONTROLLER
//another IIFE (to separate this code from the last code)
var UIController = (function() {
	
	//some code

})();




// GLOBAL APP CONTROLLER
//another IIFE; calling on the previous ones to connect them:
var controller = (function(budgetCtrl, UICtrl) {

	var ctrlAddItem = function() {
		// 1. Get the field input data

		// 2. Add the item to the budget controller

		// 3. Add the item to the UI

		// 4. Calculate the budget

		// 5. Display the budget on the UI
		
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	// Adding another eventListener for hitting the return key (keypress event) instead of clicking the button:
	document.addEventListener('keypress', function(event) {
		// specifying return key (enter's keycode in the console..older browsers use 'which')
		if (event.keycode === 13 || event.which === 13) {
			
			ctrlAddItem();

		}
	});

})(budgetController, UIController);













