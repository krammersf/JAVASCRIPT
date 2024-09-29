let calculation = '';

displayResult();

function displayResult() {
	document.querySelector('.js-calculation')
		.innerHTML = calculation;
}

function updateCalculation(value) {
	calculation += value;
	console.log(calculation);
	displayResult();
}

function removeDigit() {
	const sinal = ['+', '-', '*', '/' ];
	if (sinal.includes(calculation.slice(-2, -1))) {
		calculation = calculation.slice(0, -3);
	} else {
		calculation = calculation.slice(0, -1);
	}
	console.log(calculation);
	displayResult();
}


function calculateResult() {
	try {
		calculation = eval(calculation).toString();
		console.log(calculation);
	} catch (e) {
		calculation = 'Error';
	}
	console.log(calculation);
	displayResult();
}

function clearCalculation() {
	calculation = '';
	displayResult();
}

function sinalChanges() {
	if (calculation.startsWith('-')) {
		calculation = calculation.slice(1);
	} else {
		calculation = '-' + calculation;
	}
	console.log(calculation);
	displayResult();
}

function percentage() {
	try {
		// Find the last number in the calculation string
		const match = calculation.match(/(\d+(\.\d+)?)$/);
		if (match) {
			const number = match[0];
			const percentageValue = (parseFloat(number) / 100).toString();
			// Replace the last number with its percentage
			calculation = calculation.slice(0, match.index) + percentageValue;
		}
	} catch (e) {
		calculation = 'Error';
	}
	console.log(calculation);
	displayResult();
}