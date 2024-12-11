//First, we'll make a basic named function
//we can call functions before they're declared due to something called HOISTING
helloWorld()

function helloWorld(){
    console.log("Hi World :)")
}

//anon(13) //<- Anonymous functions are NOT HOISTED! So we can't invoke them before declaration

//Here's an anonymous function - it has no name, but we can assign them to variables
anon = function(var1){
    console.log("Hi I'm an anonymous function stored in a variable!")
    console.log("My variable value is: " + var1)
}

anon(25)

//Arrow functions are just like lambdas in Java (value) => {code}
let arrowFunc = (var1, var2) => {
    //Let's use this function to test == vs ===
    console.log(var1 + " compared to " + var2)
    console.log(var1 === var2)
}

arrowFunc(false, false) // false === false. same value and type
arrowFunc(0, false) // 0 and false are both falsy, but different datatypes
arrowFunc(2, true)

//Callback functions - functions that get passed as params to other functions
function f1(x){
    console.log("Inside function 1")
    console.log("The value passed in from function 2 is: " + x)
    console.log("End of function 1")
}

function f2(x, someFunction){
    console.log("Inside function 2")
    someFunction(x) //calling f1 and giving it a parameter of 5000 (in this specific case)
    console.log("End of function 2")
}

//invoke f2, which takes f1 as a parameter
f2(5000, f1)

console.log("==============================(Global Scope)")

//anything that is globally scoped can be accessed anywhere in the script (the JS file)
console.log(a) //this is visible... but it's "undefined"

//vars are globally scoped due to HOISTING - all named functions and vars are hoisted and globally scoped
var a = 5;

console.log(a) //a is visible with a value after declaration of course

//Let's attempt the same thing with a let---------
//console.log(b) <- This is ILLEGAL! lets and consts are NOT hoisted

//This is actually a good thing - we usually don't want access to undefined variables

let b = 10;

console.log(b) //and of course, this prints just fine

console.log("==============================(Local Scope)")