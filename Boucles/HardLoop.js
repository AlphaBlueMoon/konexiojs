//Exo 1 Sum//
let numbers = [];
let min = 1;
let max = 100;
let somme;
for (let i = 0; i <= 50; i++) {
	let result = Math.floor(Math.random() * (max - min + 1) + min);
	numbers.push(result);
	somme = result + somme;
}
//console.table(numbers);

console.log(somme);
/*
result = 57 
somme = 0
result + somme = 57
somme = 57
result = 12
result + somme = 69
somme = 69
*/

// Exo 2 Max//
let numbers2 = [];

max = 200;

for (let i = 0; i <= 50; i++) {
	let result = Math.floor(Math.random() * (max - min + 1) + min);
	numbers2.push(result);
}
console.table(numbers2);

//Exo 3 Unique//

let nombre = [];
