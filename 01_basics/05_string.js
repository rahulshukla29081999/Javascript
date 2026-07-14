// String
 

// const name = "rahul"
const repoCount = 101

// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('rahul-rs')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(newString)

const newStringOne = "  rahul  "
console.log(newStringOne.trim())

const url = "https://rahul.com/rahul%20shukla"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))