//Immediately Invoked Fucntion Expression(IIFE)

(function chai() {

    //named iife
  console.log(`conncted DB`);
})()


((name) => {
    console.log(`Db connected two ${name}`)

})('rahul')