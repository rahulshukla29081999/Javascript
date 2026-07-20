// if - should  be ture

// const isUserLoggedIn = true
// const temperature = 42;
// if (temperature === 42) {
//   console.log("Temperature is less than 50");
// }
// console.log("Temperature is greater than 50");
//   1!=2

// <,>,<=,>=,==,===,!=

const temperature = 42;
if (temperature === 42) {
  console.log("Temperature is less than 50");
} else {
  console.log("Temperature is greater than 50");
}
console.log("execute");

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(` user  power: ${power}`);
}

const balance = 1100;
if (balance > 500) console.log("test1");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy item");
}
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log(" User Logged In ");
}
