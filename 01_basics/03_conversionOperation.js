// let score = "69"
// let score = "69abc"
// let score = null
let score = "rahul"

console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber);               //Number
console.log(valueInNumber)                       //NaN
console.log(valueInNumber)                       // 0
console.log(valueInNumber)                      //NaN

// "69" => 69
// "69abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//true => 1; false => 
// ""=> false
// "rahul" => true

 someNumber = 69
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


//****** Operations ******//
let value = 9
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/3)
console.log(2%3)

let str1 = "rahul"
let str2 = " shukla"
let str3 = str1 + str2
console.log(str3);


// console.log(2 + "2"); // 22
// console.log("2" + 2); // 22
// console.log("2" + 2 + 2); // 222
// console.log(2 + 2 + "2"); // 42
// console.log((3+8) * 5 % 3);
// console.log(true) //true
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// gameCounter++;                             //postfix
// console.log(gameCounter)

let gameCounter = 100
++gameCounter;                                //prefix
console.log(gameCounter)