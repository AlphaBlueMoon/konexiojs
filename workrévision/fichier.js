//Exo 1 Alphabet//

function sortLetters(nom) {
	nom = nom.split('');
	nom.sort();
	nom = nom.join('');
	return nom;
}
// appel
let motRetourne = sortLetters('Konexio');
console.log(motRetourne);
console.log(sortLetters('konexio'));

//Exo 2 XOXO//
function countEach(noom) {
	let resultO = 0;
	let resultX = 0;
	for (let i = 0; i <= noom.length; i++) {
		let lettre = noom.charAt(i);
		if (lettre === 'o') {
			resultO = resultO + 1;
		} else if (lettre === 'x') {
			//resultX = resultX + 1
			//resultX += 1
			resultX++;
		}
	}
	console.log(resultX, resultO);
	if (resultO === resultX) {
		return true;
	} else {
		return false;
	}
}
countEach('xoxoxoxooooooooooooooooxxxxxo');
console.log(countEach('xoxxxxxxxxxxxxxxxxxxxxxxxxxxoooxxoooooooooooooooooooooooooxo'));

//Exo 3 Palindrome//
function checkPal(word) {
	var l = word.length;
	for (var i = 0; i < l / 2; i++) {
		if (word.charAt(i) !== word.charAt(l - 1 - i)) {
			return console.log('Nope');
		}
	}
	return console.log('Palindrome!');
}
checkPal('racecar');
checkPal('laptop');
