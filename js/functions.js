// Import readline-sync
const input = require('readline-sync');


/* NAMED FUNCTIONS */

// Sample data
let userInput1 = "abc";
let userInput2 = "5551920";
let userInput3 = "3145551234";

// Function with parameter and a return value of true or false
function isValidPhoneNum(userInput) {
  return !isNaN(Number(userInput)) && userInput.length === 10;
}

// Call function and print return value
console.log(isValidPhoneNum(userInput1));
console.log(isValidPhoneNum(userInput2));
console.log(isValidPhoneNum(userInput3));


/* MULTIPLE FUNCTIONS */

// Existing data to be updated
let userPhone = "(314) 555-1234";

// "Helper" or "minor" functions

function promptUserForNewPhone() {
  // Create variable scoped to this function only
  let newPhone = input.question("\nTo update your contact information, please enter your 10-digit phone number. \n"); 
  while (!isValidPhoneNum(newPhone)) {
    newPhone = input.question("Please enter a valid 10-digit number: \n");
  }
  // Return local variable
  return newPhone;
}

function formatPhone(phoneNum) {
  let areaCode = phoneNum.slice(0, 3);
  let exchange = phoneNum.slice(3, 6);
  let line = phoneNum.slice(6);
  return `(${areaCode}) ${exchange}-${line}`;
}

function updatePhone(phoneNum) {
  userPhone = formatPhone(phoneNum);
  // no return value
}

// "Main" function 
// making use of other functions
function runPhoneUpdateSequence() {
  // Ask user for new phone number, with validation
  let newNum = promptUserForNewPhone();

  // Update their record
  updatePhone(newNum);

  // Print a confirmation using number now on record
  console.log(`
Thank you! Your new phone number has been saved:
${userPhone}
`);

}

// Call main function
runPhoneUpdateSequence();


/* ANONYMOUS FUNCTIONS */

// Stored in variable
const formatSSN = function (ssn) {
  let ssn1 = ssn.slice(0, 3);
  let ssn2 = ssn.slice(3, 5);
  let ssn3 = ssn.slice(5);
  return `${ssn1}-${ssn2}-${ssn3}`;
}

/* HIGHER-ORDER FUNCTIONS */

// Using existing function
let ssnList = ["123456789", "234567890", "345678901"];

console.log(ssnList.map(formatSSN));


// Defining anon function in place
let address1 = {
  street: "123 Main Street",
  city: "St. Louis",
  state: "MO",
  zip: "63101"
};
let address2 = {
  street: "123 Main Street",
  city: "St. Louis",
  state: "MO",
  zip: "63101"
};
let address3 = {
  street: "123 Main Street",
  city: "St. Louis",
  state: "MO",
  zip: "63101"
};

let addresses = [address1, address2, address3];

// Print formatted functions
addresses.forEach(function (address, index) {
  console.log(`
Address ${index + 1}:
${address.street}
${address.city}, ${address.state} ${address.zip}`);
});
