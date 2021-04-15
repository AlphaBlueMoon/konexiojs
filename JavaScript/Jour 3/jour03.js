//Exo 1 Array//
var fruits = [ 'mango', 'lemon', 'blueberry' ];
console.log(fruits);
console.table(fruits);

//Exo 2 Access//
var ingredients = [ 'eggs', 'milk', 'butter' ];
console.table(ingredients.indexOf('milk'));
console.table(ingredients.indexOf('butter'));

//Exo 3 Add & Remove//
var objects = [ 'pen', 'book', 'lamp' ];
objects.unshift('chair');
objects.pop();
objects.push('laptop');
objects.shift();
console.table(objects);

//Exo 4 Reverse & Sort//
var numbers = [ '4', '10', '8', '12', '6' ];
numbers.reverse();
numbers.sort((a, b) => a - b);
console.table(numbers);

//Exo 5 Boucle//
var total = 0;
var limit = 10;
var result = 0;
for (var i = 0; i <= limit; i++) {
	result = result + i;
	console.log(' la valeur de i est ' + i);
	console.log(' la valeur de result est ' + result);
}
/*
i = 0:
result = 0
i + result (+ 0) = 0
i = 1: 
result = 0
i + result = 1
i = 2:
result = 1
result + i = 3
i = 3:
result = 3
i + result = 6
i = 4:
result = 6
i + result = 10
i = 5:
result = 10
result = 15
i = 6
result = 15
result = 21
i = 7 
result = 21
result = 28
i = 8
result = 28
result = 36
i = 9
result = 36
result = 45
i = 10
result = 45
result = 55
*/

//Exo 6 Reverse//
var sentence = 'Hello Konexio !';
