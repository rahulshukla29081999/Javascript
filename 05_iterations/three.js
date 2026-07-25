// for of ----------------------------------

["","", ""]
// [{}, {}, {}]
const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
    
}


const greetings = "Hi Rahul"
for (const i of greetings) {
    console.log(`Each Char is : ${i}`)
    
}

// Map -- for unique value --------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('US', "United State")
map.set('IN', "India")

console.log(map)


for (const [key,value] of map) {
    console.log(key, '-', value)
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'SpiderMan'
// }

// for (const [key,value] of myObject) {
//    console.log(key, '-', value)
    
// }