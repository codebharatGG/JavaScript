// ******************** SUMMARY ON DATATYPES **********************

//Notes:-  2-Types of datatypes A) Primative B) Non-Primetive (Reference type)
// A) Primative datatype:- String, Number, Boolean, null, undefined, BigInt, 
//    Symbol
// Examples:-

const score = 33
const scoreValue = 33.4
let temp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId);
const bigNumber = 3747378770n 

// B) Non-primitive datatype (Reference):- Array, Objects, Functions
// Examples:- 

const heros =["spiderman","ironman","kaptan marvel"]
// Curly braces ke aandar objects hote hai!!! In curly braces we write obj in key value pair

let myObj = {
    name: "Bharadwaj",
    age: 33,
}

const myFunction = function(){
    // console.log("Hello world");

}
// To check any type of the datatype we use typeof func
// console.table(typeof score, scoreValue, temp, userEmail, id, anotherId,  bigNumber, heros, myObj, myFunction)
console.log(typeof heros)