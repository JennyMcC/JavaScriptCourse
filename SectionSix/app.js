//IIFE BUDGET CONTROLLER
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;
			// Creating a new ID:
			// Getting either the inc or the exp, then getting the # of the last element in the array:
			// THEN adding 1 to it so it will be the # after whatever the last number is:
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}

			// Create new item based on 'inc' or 'exp' type:
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				 newItem = new Income(ID, des, val);
			}
			// Push it into our data structure:
			data.allItems[type].push(newItem);
			// Return the new element:
			return newItem;
		},

		testing: function() {
			console.log(data);		}
	};

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
		getDOMstrings: function() {
			return DOMstrings;
		},

		getInput: function() {
			// getting the 3 things the user inputs at the top of the page:
			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either inc. or exp.
				description: document.querySelector(DOMstrings.inputDescription).value, // value is simply what is entered by user
				value: document.querySelector(DOMstrings.inputValue).value
			};
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
		var input, newItem;
		// 1. Get the field input data
		input = UICtrl.getInput();

		// 2. Add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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












