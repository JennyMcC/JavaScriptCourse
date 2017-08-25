//IIFE BUDGET CONTROLLER
var budgetController = (function() {
//the following is private bc it is in the closure:
//can only call on it publicly by budgetController.publicTest(b) (this will essentially add b to 23)
	

})();




// UI CONTROLLER
//another IIFE (to separate this code from the last code)
var UIController = (function() {
	// storing class names from HTML so if one changes, I don't have to change it throughout the JS code:
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};

	return {
		
		getInput: function() {
			// getting the 3 things the user inputs at the top of the page:
			return {

				type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value, // value is simply what is entered by user
				value: document.querySelector(DOMstrings.inputValue).value
			
			};
		},
		// exposing DOMstrings to the public so other contollers can use them:
		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();




// GLOBAL APP CONTROLLER
//another IIFE; calling on the previous ones to connect them:
var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {
		// calling on the DOMstrings so I can use them here:
		var DOM = UICtrl.getDOMstrings();
		// now called DOM instead of DOMstrings bc I changed it when I called on it. whyyyyy
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
		// Adding another eventListener for hitting the return key (keypress event) instead of clicking the button:
		document.addEventListener('keypress', function(event) {
			// specifying return key (enter's keycode in the console..older browsers use 'which')
			if (event.keycode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};


	var ctrlAddItem = function() {
		// 1. Get the field input data
		var input = UICtrl.getInput();

		// 2. Add the item to the budget controller

		// 3. Add the item to the UI

		// 4. Calculate the budget

		// 5. Display the budget on the UI

	};

	// actually calling on the setupEventListeners function so it's public?
	return {
		init: function() {
			console.log('application has started.');
			setupEventListeners();
		}
	};

})(budgetController, UIController);

// need this to make everything happen (calling on the eventListeners)
controller.init();












