// // Functions
// Functions are reusable blocks of code designed to perform specific tasks, prevent repetition, and keep your code clean. In JavaScript, they act as the primary building blocks of an applicatio

// 📖 What is a Function?

// Imagine you're making tea.

// Normally you do these steps every time:

// Boil water
// Add tea leaves
// Add milk
// Add sugar
// Serve

// Instead of writing these steps again and again, you can give them a name:

// makeTea()

console.log("R");
console.log("A");
console.log("H");
console.log("U");
console.log("L");

function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
}

sayMyName();
console.log(sayMyName);

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumber(1, 5);
addTwoNumber(1 + "4");

function addTwoNumber(number1, number2) {
  // const result = number1+ number2
  // return result
  return number1 + number2;
}
const result = addTwoNumber(2, 5);
console.log("result:", result);

function loginUserMessage(username) {
  //
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return ` ${username} just logged in`;
}

// console.log(loginUserMessage("Rahul"))
console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  // ... rest/spread operator - read about it -- shopping cart
  return num1;
}
// console.log(calculateCartPrice(500,100,700))

//  object --- function
const user = {
  username: "rahul",
  price: 333,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}
//  handleObject(user)
handleObject({
  username: "rocky",
  price: 333,
});

//  Array --- Function

const myNewArray = [100, 200, 300, 400];
function returnSecondValue(getArray) {
  return getArray[2];
}
//  console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 400]));
