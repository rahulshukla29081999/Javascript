// Numbers and Maths --

const score = 400
console.log(score)

const balance = new Number(101) //new object
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))                      // 101.0

const anotherNumber = 789.2581
console.log(anotherNumber.toPrecision(3))             // 789


const anotherNumberPlus = 1789.2581
console.log(anotherNumberPlus.toPrecision(3))         // 1.79e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// ************************ Maths ************************//

console.log(Math.abs(-9))            // 9
console.log(Math.abs(9))             // 9

console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))

console.log(Math.min(1,2,3,4,5,6))
console.log(Math.max(1,2,3,4,5,6))

console.log(Math.random())  // random value  0 to 1
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log( Math.floor(Math.random() * (max - min + 1)) + min);