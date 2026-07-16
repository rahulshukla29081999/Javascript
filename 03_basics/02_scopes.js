// Scope

// let a = 10;
// const b = 20;
// var c = 30;

// {}- scopes

var c = 311; // Global scope

if (true) {
  // Block Scope
  let a = 10;
  const b = 20;
  // var c = 30; // c = 30
  console.log("inner ", a);
}

// console.log(a);
// console.log(b);
console.log(c);

function one() {
  const username = "rahul";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "rahul";
  if (username === "rahul") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website)
}
// console.log(username)

///*************Intresting****************/

console.log(addOne(5));
function addOne(num) {
  //                                        Syntax -1
  return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
  // Js variable holding functions ----         Syntax - 2
  return num + 2;
};
