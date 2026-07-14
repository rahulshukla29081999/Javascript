 //DataTypes--
 
 // Primitive DataTypes-

// 7 types - String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100                //Number
const scoreValaue = 100.3        //Number

const isLoggedIn = false         //Boolean
const outsideTemp = null         //Null
let userEmail;                   //Undefined

// symbol = for making unique

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) 

const bigNumber = 7894561236547891597539632147n        //BigInt


// Reference (Non - Premitive DataTypes)

// Array, Object, Functions

const heros = ["Shaktiman", "Aryamaan", "Doga"] //Array

let myObj = {                                   //Object
    name:"Rahul",
    age: 24,
}


const myFunction = function(){
    console.log("Rahul Shukla")
}

console.log(typeof myFunction)


//Javascript is Dynamically Typed languague



//******************************************************************************* */

//Memory

// Stack( Premitive)
// Heap (Non-Premitive)




//Stack
let myYoutubename = "rahulshukladotcom"
let anotherName = myYoutubename
anotherName = "shuklarahuldotcome"
console.log(myYoutubename)
console.log(anotherName)




//Heap -- Reference 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "rahul@google.com"

console.log(userOne.email)
console.log(userTwo.email)