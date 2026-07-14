// Objects



//Singleton -- Constructor se banega toh..
// object.create - through constructor
// object literals

  // {} -- object
const JsUser ={ 
    name: "Rahul",
    "fullName": "Rahul Shukla",
    age: 24,
    location: "Kanpur",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]

} 

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser.fullName)

JsUser.email = "rahul@chatgpt.com"
// Object.freeze(JsUser) 
JsUser.email = "rahul@apple.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User")

}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)

}


console.log(JsUser.greeting());
console.log(JsUser.greeting2());