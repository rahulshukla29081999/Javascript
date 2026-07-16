// Arroy Function ---------                                        (=>)
const user = {
  username: "rahul",
  price: 999,
  welcomeMsg: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// this - current context ko refer krta hai...

// user.welcomeMsg()
// user.username = "rocky"
// user.welcomeMsg()

console.log(this); //--- {}

//  function chai (){
//     let username = "rahul"
//     console.log(this.username)
//  }
//  chai()

// const chai = function(){
//     let username = "rahul"
//     console.log(this.username)
// }
// chai()

const chai = () => {
  let username = "rahul";
  console.log(this);
};
chai();

//  () => {}                // Arrow Function

// const addTwo = (num1, num2) => {                   // Basic Arrow Function
//     return num1+num2
// }
// console.log(addTwo(4+5))

// const addTwo = (num1, num2) =>  num1+num2

// const addTwo = (num1, num2) =>  (num1+num2)                          // Implicit return

const addTwo = (num1, num2) => ({ username: "rahul" });

console.log(addTwo(4 + 5));
