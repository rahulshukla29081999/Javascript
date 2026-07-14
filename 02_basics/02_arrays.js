// Array

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "barman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'barman' ] ]
// console.log(marvel_heros[3][1])     //flash



//Concat
const all_heros = marvel_heros.concat(dc_heros)  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'barman' ]
console.log(all_heros)    

// Spread Operator 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Rahul"))     //false
console.log(Array.from("Rahul"))        //[ 'R', 'a', 'h', 'u', 'l' ]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))