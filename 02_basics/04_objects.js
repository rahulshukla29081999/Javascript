// const tinderUser = new Object()     // Singleton object
 const tinderUser = {}                 // Non-Singleton object

 tinderUser.Id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false
 console.log(tinderUser)


 const regularUser = {
    email: "rahul@gmail.com",
    fullname:{
        userfullname:{
            firstname: "rahul",
            lastname: "shukla"

        }
    }
 }
 console.log(regularUser.fullname.userfullname.firstname)


 const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1, ...obj2}               // spread operator
console.log(obj3)

const users = [
    {
        id : 1,
        email : "rahul@gmail.com",
    },
    {
         id :2 ,
        email : "rahu@gmail.com",
    }
]
console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))                // [ 'Id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))              // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser))             // [ [ 'Id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] 

console.log(tinderUser.hasOwnProperty('isLoggedIn'))         // true



/*++++++++++Object Destructuring+++++++++*/

// Object  ko toh Destructuring kiya hi jata h aur Array ko bhi kar skte hain


const course = {
    coursename: "JavaScript",
    price: "999",
    CourseInstructor: "Hitesh"

}

// course.coursename

const{coursename:c_name} = course
console.log(c_name)

// {
//     "name": "rahul",
//     "coursename": " JavaScript",
//     "price": "free"

// }                                 // JSON --- API


// [

// {},
// {},                               //  JSON - ARRAY Format - API
// {}
// ]

