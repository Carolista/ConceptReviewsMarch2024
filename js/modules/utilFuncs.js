/* UTILITY FUNCTIONS */

function roundToDec(n, numDec) {
	let factor = 10**numDec;
	return Math.round(n * factor) / factor;
}

function getRandomNumber(max, min = 0, numDec = 0) {
	let randomNum = Math.random() * (max - min) + min;
	return roundToDec(randomNum, numDec);
}


/* EXPORT OBJECT */
module.exports = {
  roundToDec: roundToDec,
  getRandNum: getRandomNumber
}
