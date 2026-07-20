// for - loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let i = 0; i <= 10; i++) {
  const element = i;
  if( element == 5){
    console.log("5 is good no.")
  }

  console.log(element);
}


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop ${i}`)
     for( let j = 0; j<=10; j++){
        // console.log(`Inner  loop ${j} and Inner loop ${i}`)
        // console.log(i + '*' + j + ' = ' + i*j);
        // console.log(i*j)

     }
    
}

let myArray = ["shaktimaan","Aryamaan"," Flash"]
console.log(myArray.length)


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// i++ =  i= i+1  

// break and continue ---------------------------------------------------------------------------------

// break -- break the loop
// continue -- skip once in loop
 for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        // break
        continue      
    }

console.log(`value of i is: ${index}`);
 }

