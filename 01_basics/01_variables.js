//Variables--

const accountId = 123456 // will not change
let accountEmail = "rahul@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"

// accountId = 2 //not allowed

accountEmail = "rs@gmail.com"
accountPassword = "111"
accountCity = "knp"
let accountState;
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])