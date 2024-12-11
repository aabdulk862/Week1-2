console.log("===============================(Printing/Declaring Variables)")

//JS is LOOSELY TYPED, so I can declare variables without declaring the datatype
//We can also easily reassign variables to different datatypes (implicit type coercion)
a = 100
a = true
a = null
a = "Now I'm a String"

//JavaScript will assign variables with "var" by default
b = "I am a var! Because let/const weren't specified"
let b2 = "I am a let! More modern version of var. We typically use these"
const b3 = "I am a const! Like final in Java, my value won't change"

//Array just for fun - JS Arrays can hold any datatypes we want
let arr = [6, "a string", false, null, {objectVal1:5, objectVal2:"something"}]
//we can use .push() to add values to the end of Arrays
arr.push("Hi I'm a new value!")

console.log(arr)

//Trying to get the NaN datatype
console.log("string"/5)

console.log("==================================(Testing Type Coercion)")

//Let's see what JS decides as the data type for these variables

let testVar = "5" * 5
console.log("String times number is: " + testVar + " " + typeof testVar)
//number - JS assumes we're doing math. pretty much any operator besides + will result in a number

let testVar2 = "5" + 5
console.log("String plus number is: " + testVar2 + " " + typeof testVar2)
//string - JS assumes we're string concatenating, since we're using the + operator 

//Let's see the + operator with more than 2 values

let testVar3 = 5 + 5 + "5"
console.log("number plus number plus string is: " + testVar3 + " " + typeof testVar3)
//string 105 - 5 + 5 = 10. 10 + "5" = "105" 

let testVar4 = 5 + "5" + 5
console.log("number plus string plus number is: " + testVar4 + " " + typeof testVar4)
//string 555 - 5 + "5" = "55". "55" + 5 = "555"

console.log("=================================(Truthy/Falsy)")

//I want to write a function that compares a value to the boolean true to demonstrate truthy/falsy
function testTrueFalse(var1){
    console.log("is " + var1 + " truthy?")
    if(var1){
        console.log("YES!!")
    } else {
        console.log("NO!! It's falsy")
    }
}

testTrueFalse(0)
testTrueFalse(1)
testTrueFalse("")
testTrueFalse(".")

//while any non-zero number is truthy, the boolean true evaluates to the number 1
//so comparing any number besides 1 to the boolean true will return false

if(2 == true){
    console.log("I will never print")
}

if(2){
    console.log("2 is truthy, but it doesn't == true")
}