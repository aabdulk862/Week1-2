//I want to access the p that had an id of "p1" - DOM SELECTION
let p1 = document.getElementById("p1")

console.log(p1)

//We can set attributes of element we've DOM selected
//This is an example of DOM MANIPULATION
p1.setAttribute("style", "background-color:burlywood")

//p1.style.backgroundColor = "pink" <- another way we could do it

/* Inline styling isn't best practice... so why would this be?

One possible use case: changing the color of a header etc. based on user success
Green for success? Red for failure?

Maybe there's a header that says "please log in"
-If the user logs in successfully it can turn green and say something like "success!" before going to the user dashboard
-If the user fails to log in the header can turn and change to something like "login failed! try again" */

console.log("========================(Events)")

//DOM Select btn1 
let btn1 = document.getElementById("btn1")

//Event Listeners take in some event to "listen" for and a function to execute
btn1.addEventListener("click", btn1function)

//Let's also DOM select the empty p
let p2 = document.getElementById("p2")

function btn1function(){
    //alert() makes a popup on the screen
    alert("You clicked a button! Good job")

    //adding content to the empty <p>
    p2.textContent = "Now I have content! Thank you"
}

//Some mouseOver and mouseLeave examples

//DOM Selection of header
let header = document.getElementById("header")

//Quicker way to add event listeners:
header.onmouseover = mouseoverFunction
header.onmouseleave = mouseleaveFunction

function mouseoverFunction(){
    header.textContent = "Don't touch me!"
}

function mouseleaveFunction(){
    header.textContent = "Why did you leave me :("
}