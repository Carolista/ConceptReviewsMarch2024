const input = require('readline-sync');


// Example 1 - Iterating over an array and accessing each element with bracket notation

let typesOfApples = ["Fuji", "Red Delicious", "MacIntosh", "Gala"];

for (let i = 0; i < typesOfApples.length; i++) {
  console.log(`Gosh I'm hungry. I should have a ${typesOfApples[i]} apple as a snack!`);
}


// Example 2 - Using more than one array of the same length and incorporating input.question()

let clientInfoNeeded = ["First Name: ", "Last Name: ", "Email Address: ", "Phone Number: "];

let firstName = "";
let lastName = "";
let email = "";
let phone = "";

let clientInfoGathered = [firstName, lastName, email, phone];

let line = "*".repeat(32);

console.log("\nPlease give us your contact information:\n");
for (let i = 0; i < clientInfoNeeded.length; i++) {
  clientInfoGathered[i] = input.question(clientInfoNeeded[i]);
}

console.log("\n" + line);

console.log ("Thank you for your information.\n \nSummary:\n");

for (let i = 0; i < clientInfoGathered.length; i++) {
  console.log(`${clientInfoNeeded[i]}\t${clientInfoGathered[i]}`);
}

console.log(line + "\n");


// Example 3 - Copying elements from one array to another

let nationalParks = ["Yellowstone", "Gateway Arch", "Glacier", "Zion", "Shenandoah", "Everglades"];

let nationalParksFullNames = [];

for (let i = 0; i < nationalParks.length; i++) {
  let fullName = nationalParks[i] + " National Park";
  nationalParksFullNames.push(fullName);
}

console.log(nationalParksFullNames);
