/* FETCHING JSON */

// Use this URL as an endpoint:
// https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt

window.addEventListener("load", () => {

  // OLD SCHOOL - .then()
  
  const oldSchool = document.getElementById("old-school");

  // Fetch plant data and print it
  // Add HTML to page for each plant with simple sentence
  // Ex: "There are 16 red tulip bulbs available." 
  fetch("https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt")
    .then(response => response.json())
    .then(data => {
      console.log("Old school fetch", data);
      for (let plant of data) {
        oldSchool.innerHTML += `<p>There are ${plant.numAvailable} ${plant.color} ${plant.name} bulbs available.</p>`;
      }
    });
  
  
  // MODERN - async & await

  const modern = document.getElementById("modern");
  
  // Create an asynchronous function to fetch plant data and print it
  // Use .forEach() to put a div on the page for each plant with image and text
  const fetchPlants = async () => {
    let url = "https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt";
    let response = await fetch(url);
    let data = await response.json();
    console.log("Modern fetch", data);
    data.forEach(plant => {
      modern.innerHTML += `
      <div class="card">
        <img src=${plant.image} width="50px" />
        <div class="text-area">
          <h4 class="upper">${plant.color} ${plant.name}</h4>
          <p>${plant.numAvailable} available</p>
        </div>
      </div>
      `;
    });
  }
  
  // Don't forget to call the async function
  fetchPlants();

});


