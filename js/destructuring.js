/* DESTRUCTURING */

// ARRAYS

let languages = ["JavaScript", "Java", "Python", "C#", "Ruby"];

// Use destructuring to create variables for each element in the array
let [ js, java, python, cSharp, ruby ] = languages;

// Print "JavaScript" and "Ruby" using the new variables
console.log(js);
console.log(ruby);


// OBJECTS

let contactInfo = {
  name: "P. Sherman",
  address: {
    street: "42 Wallaby Way",
    city: "Sydney",
    country: "Australia"
  }
};

// Use destructuring to create variable for name
let { name } = contactInfo;

// Use destructuring to create variables for street, city, and country
let { street, city, country } = contactInfo.address;

// Print "P. Sherman" and "Sydney" using the new variables
console.log(name);
console.log(city);


// IMPORTING AN EXPORT OBJECT

// Use common import syntax with destructuring to import all constants and functions from modules
const { PI, G } = require('./modules/constants.js');
const { roundToDec, getRandNum } = require('./modules/utilFuncs.js');

// Print both constants, rounding PI to 3.1416
console.log(roundToDec(PI, 4));
console.log(G);

// Print a random number between 5-10, rounded to 2 decimal places
console.log(getRandNum(10, 5, 2));
