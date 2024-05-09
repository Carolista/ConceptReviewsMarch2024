/* ADVANCED LOOPING */

let books = [
  {id: 2944, title: "Divergent", numPages: 487},
  {id: 2945, title: "Insurgent", numPages: 525},
  {id: 2946, title: "Allegiant", numPages: 526}
];

// Use a regular for loop to print the titles of each book
for (let i=0; i < books.length; i++) {
  console.log(books[i].title);
}

// Use a for-of loop with a nested for-in loop to print all three properties of each object
for (let book of books) {
  console.log("\nAUTHOR: Veronica Roth");
  for (let key in book) {
    console.log(`${key.toUpperCase()}: ${book[key]}`);
  }
}

// Use .map() to produce an array with a sentence for each book and store it in a variable
let sentences = books.map(book => {
  return `The book ${book.title} by Veronica Roth has ${book.numPages} pages.`;
});

// Use .forEach() to print each sentence from the new array
sentences.forEach(sentence => console.log("\n" + sentence));
