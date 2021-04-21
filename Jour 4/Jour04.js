//Exo 1 Object//
let cat = {
	name: 'Garfield',
	age: 3,
	isCute: true
};
console.log(cat.age);
console.log(cat);

if (true === true) {
	console.log(' So cuuute ! ');
} else {
	console.log(' You are not cuuute ! ');
}

//Exo 2 Combine//

var cat2 = {
	name: 'Cataleya',
	age: 3,
	isCute: true
};

let cats = [ cat, cat2 ];
console.table(cats);
console.log(cat2.age);
if (true === true) {
	console.log(' So cuuute ! ');
} else {
	console.log(' You are not cuuute ! ');
}

//Exo 3 Even//

function checkIfEven(num) {
	if (0 === num % 2) {
		console.log('even');
	} else {
		console.log('odd');
	}
	return num;
}
let monNumero = 18;
checkIfEven(monNumero);
checkIfEven(20);
checkIfEven(15);
checkIfEven(3);

//Exo 4 Compare//
function compare(num1, num2) {
	if (num1 < num2) {
		console.log(' num1 Is bigger ! ');
	} else if (num2 < num1) {
		console.log(' num2 is bigger ');
	} else {
		console.log(' Booth are the same ');
	}
}
let num1 = 2;
let num2 = 3;
compare(5, 9);
compare(7, 3);

//Exo 5 Add Up//

function addUp(num) {
	let result = 0;

	for (var i = 0; i <= num; i++) {
		result = i + result;
	}
	console.log(result);
}

addUp(12);
