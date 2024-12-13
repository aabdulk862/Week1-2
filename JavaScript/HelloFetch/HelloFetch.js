//PokeAPI base URL - making a variable to hold the base URL to reach pokeAPI. This is for cleaner code
const url = "https://pokeapi.co/api/v2/pokemon/";

//use DOM Selection to select all of the elements I plan to fill with data
let pokename = document.getElementById("pokename");
let poketype = document.getElementById("poketype");
let pokenum = document.getElementById("pokenum");
let pokepic = document.getElementById("pokepic");

//when the user clicks the button, execute the fetchData method (using an eventListener)
document.getElementById("btn").onclick = fetchData;

/* This function will return some pokemon data from PokeAPI
 It will use a fetch request to return a promise object 
 The promise object will get filled with pokemon data OR it will fail*/
async function fetchData() {
  //First, we need to gather user input from the input box
  const userInput = document.getElementById("userInput").value;

  console.log(userInput); //just to see the value

  //Now, we can use the fetch() function to sent a GET to pokeAPI
  //Fetch sends a GET by default BTW
  await fetch(url + userInput)
    .then((response) => response.json()) //extracting the HTTP response and turning it into a JS object
    .then((data) => renderHTML(data)) //send the JS data to a new function that renders the data on the page
    .catch((error) =>
      alert("Pokemon with ID " + userInput + " doesn't exist! ")
    );
}

//This function will take in the JS Pokemon data and render it on the page
function renderHTML(data) {
  //print out the data just so we can see it
  console.log(data);

  //getting all the pokemon's types in one string
  //for each type found, append it to this variable
  let types = "";
  for (let val of data.types) {
    types += val.type.name + " ";
  }

  //populate the table with our Pokemon Data
  pokename.innerText = data.name;
  poketype.innerText = types.trim(); //trim takes out beginning and ending empty space
  pokenum.innerText = data.id;

  //pokepic is an <img> so we need to set the src attribute
  pokepic.setAttribute("src", data.sprites.front_default);
}
