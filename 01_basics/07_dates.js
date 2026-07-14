// Dates

let myDate = new Date()
console.log(myDate.toString())               //Tue Jul 14 2026 10:15:11 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())        //Tue Jul 14 2026
console.log(myDate.toJSON())              //2026-07-14T04:46:04.241Z
console.log(myDate.toISOString())         //2026-07-14T04:46:18.616Z
console.log(myDate.toTimeString())        //10:16:38 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString())   //7/14/2026, 10:17:47 AM      


let myCreatedDate = new Date(2026, 0, 26)        // Month starts from January = 0
console.log(myCreatedDate.toDateString())        //Mon Jan 26 2026

let myCreatedDate2 = new Date("2026-01-26")  // yy-mm-dd format
console.log(myCreatedDate2.toDateString())


let myCreatedDate3 = new Date("01-15-2026")  // mm-dd-yy format
console.log(myCreatedDate3.toLocaleString())

let myTimeStamp =  Date.now()
console.log(myTimeStamp)                   // 1784004948007   --- milisecond value
console.log(myCreatedDate.getTime())        //1769365800000
console.log(Date.now())                     //1784005103756


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)  // month = 7 = july

// `${newDate.getDay()} and the time`

 console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))