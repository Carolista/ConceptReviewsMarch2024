/* IMPORTS */
const constants = require('./modules/constants.js');
const utils = require('./modules/utilFuncs.js');

/* USING IMPORTED ITEMS */

// Calculate the number of seconds it takes for an object to reach the ground if dropped from a height of 50 meters. Round it to 1 decimal place before printing.
let time = Math.sqrt(50 / constants.G);
console.log(utils.roundToDec(time, 1));
