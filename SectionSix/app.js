// BUDGET CONTROLLER
// IIFE
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

	var calculateTotal = function(type) {
		var sum = 0;
		data.allItems[type].forEach(function(cur) {
			sum += cur.value;
		});
		data.totals[type] = sum;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		percentage: -1 // -1 basically means nonexistant (which the percentage would be starting out)
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

		deleteItem: function(type, id) {
			var ids, index;
			//id = 6
			//data.allItems[type][id]; won't work bc in the array 6 is index 3.
			//ids = [1 2 4 6 8]
			ids = data.allItems[type].map(function(current) {
				return current.id;
			});

			index = ids.indexOf(id);

			if (index !== -1) {
				data.allItems[type].splice(index, 1); // will remove 1 element at the index named
			}
		},

		calculateBudget: function() {
			// calculate total income and expenses
			calculateTotal('exp');
			calculateTotal('inc');
			// calculate the budget: income - expenses
			data.budget = data.totals.inc - data.totals.exp;
			// calculate the percentage of income that we spent
			if (data.totals.inc > 0) {
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else {
				data.percentage = -1; // if the income is not > 0 then set the percentage to nonexistant.
			}
		},

		getBudget: function() {
			return {
				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			}
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
		inputBtn: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainter: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expensesLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		container: '.container'
	};

	return {
		getInput: function() {
			// getting the 3 things the user inputs at the top of the page:
			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either inc. or exp.
				description: document.querySelector(DOMstrings.inputDescription).value, // value is simply what is entered by user
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value) // parseFloat will convert this from a string to a number so we can add with it later.
			};
		},
		// getting input to display on the bottom of the page:
		addListItem: function(obj, type) {
			var html, newHtml, element;
			// Create HTML string with placeholder text:
			// replace generic criteria with %id%, %description% and %value%:
			if (type === 'inc') {
				element = DOMstrings.incomeContainer;
				html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {
				element = DOMstrings.expensesContainter;
				html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}
			// Replace the placeholder text with some actual data (have to put 'newHtml' the 2nd and 3rd time so it doesn't revert back)
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);
			// Insert the HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
		},
		//actually deleting things from the list when user clicks button:
		deleteListItem: function(selectorID) {
			var el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},

		clearFields: function() {
			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
			// changing the object fields to an array (using slice):
			fieldsArr = Array.prototype.slice.call(fields);
			// resetting the values so they're empty:
			fieldsArr.forEach(function(current, index, array) {
				current.value = "";
			});
			// setting the curser to be back on the first field (using focus..focus on the first field in the array):
			fieldsArr[0].focus();
		},
		// Getting the numbers to display on the top portion of the page:
		displayBudget: function(obj) {
			document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
			document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
			document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
			// only display percentage if it's > 0:
			if (obj.percentage > 0) {
				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			} else {
				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
		},

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
		// when user clicks delete, do ctrlDeleteItem function:
		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
	};

	var updateBudget = function() {
		// 1. Calculate the budget
		budgetCtrl.calculateBudget();
		// 2. return the budget
		var budget = budgetCtrl.getBudget();
		// 3. Display the budget on the UI
		UICtrl.displayBudget(budget);
	};

	var ctrlAddItem = function() {
		var input, newItem;
		// 1. Get the field input data
		input = UICtrl.getInput();
		// only adding things if the descriptions are actually filled out AND if the value is NOT Not a Number AND if the value is greater than 0:
		if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
			// 2. Add the item to the budget controller
			newItem = budgetCtrl.addItem(input.type, input.description, input.value);

			// 3. Add the item to the UI
			UICtrl.addListItem(newItem, input.type);

			// 4. Clear the fields:
			UICtrl.clearFields();

			// 5. Calculate and update budget:
			updateBudget();
		}
	};
	// making the delete buttons work:
	var ctrlDeleteItem = function(event) {
		var itemID, splitID, type, ID;

		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; // parentNode moves me up in the div's above the delete button div(html). I wanted to be above all the div's containing information so that I could delete it all when the user presses the delete button. It was 4 div's above the button to get to the div containing all the inc and exp lists.
		if (itemID) {
			//inc-1
			splitID = itemID.split('-');
			type = splitID[0];
			ID = parseInt(splitID[1]); //converting the string to a number
			// 1. delete the item from the data structure
			budgetCtrl.deleteItem(type, ID);
			// 2. delete the item from the user interface
			UICtrl.deleteListItem(itemID);
			// 3. update and show the new budget(at top)
			updateBudget();
		}
	};
	// actually calling on the setupEventListeners function so it's public?
	return {
		init: function() {
			console.log('application has started.');
			UICtrl.displayBudget({
				budget: 0,
				totalInc: 0,
				totalExp: 0,
				percentage: -1
			});
			setupEventListeners();
		}
	};

})(budgetController, UIController);
// need this to make everything happen (calling on the eventListeners)
controller.init();












