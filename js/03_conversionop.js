// ***********************CONVERSION's & Operation **************************

let score = "33ac"
// console.log(typeof score)

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

let temp = null
// console.log(temp)
// console.log(typeof temp)

let valueInTemp = Number(temp)
// console.log(typeof valueInTemp)
// console.log(valueInTemp)

let infinity = undefined
// console.log(infinity)
// console.log(typeof infinity)

let valueInInfinity = Number(infinity)
// console.log(typeof valueInInfinity)
// console.log(valueInInfinity)

let score1 = true
// console.log(typeof score1)
// console.log(score1)

let valueInBoolean = Number(score1)
// console.log(valueInBoolean)
// console.log(typeof valueInBoolean)


//NOTES =>
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = 1
// console.log(typeof isLoggedIn)


let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn )
// console.log(booleanIsLoggedIn )


//"" => false; "Bharadwaj" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)

/* In the above example we can clearly see that the the variable name as, 
someNumber = 33 is looking as number but it is actually a string,
because of conversion so now we treat it as a string from now onwards!!
*/
// This topic is little bit confusing,but be patient and try to understand it!!!

// console.table([typeof score,valueInNumber,typeof valueInNumber,temp,typeof temp,typeof valueInTemp,infinity,typeof infinity,typeof valueInInfinity , valueInInfinity,typeof score1,score1,valueInBoolean,typeof valueInBoolean,typeof isLoggedIn,typeof booleanIsLoggedIn,booleanIsLoggedIn,typeof stringNumber,stringNumber])

// ***********************  OPERATION's **********************
// let value = 3
// let negValue = -(value)
// console.log(negValue)

// str1 = "Hello"
// str2 = " Bharadwaj"
// console.log(str1+str2)

// console.log(1 + "2")
// console.log("1" + 2)
// console.log(1 + 2)
// console.log(1 + 2 + 3) 
// console.log(1 + 2 + "3") 
// console.log("1" + 2 + 3) 
// console.log("1" + 2 + 3 + 4) 
// console.log(1 + "2" + 3 + 4) 
// console.log(1 + 2 + "3" + 4) 
// console.log(1 + 2 + "3" + 4 + 5)  

// Prefix and postfix 
//console.log(++100) // prefix
//console.log(100++) // postfix

// Assignment:- Read the documentation of mnd on prefix & postfix before moving on next lecture!!!

// let x = 3;
// const y = ++x;
// console.log("The value of X is: ",x)
// console.log("The value of Increment is: ",y)

// let x1 = 3;
// let y1 = ++x;
// console.log("The value of X2 is: ",x)
// console.log("The value of Increment 2 is: ",y)

// let x2 = 3;
// let y2 = ++x;
// console.log("The value of X3 is: ",x)
// console.log("The value of Increment 3 is: ",y)


