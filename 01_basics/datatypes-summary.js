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

