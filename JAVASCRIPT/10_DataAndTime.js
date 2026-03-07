// DATES

let myDate = new Date()
console.log(myDate.toString())//Sat Mar 07 2026 19:43:23 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())// Sat Mar 07 2026
console.log(myDate.toLocaleString())// 7/3/2026, 7:43:23 pm
console.log(typeof myDate) // object
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.getTimezoneOffset())

console.log()

let myCreatedDate = new Date(2026, 2, 7 , 19 , 53 ,21) // months index starts from 0 in JS
console.log(myCreatedDate.toDateString()) // Wed Jan 07 2026
console.log(myCreatedDate.toLocaleString()) // 7/1/2026, 7:53:21 pm

console.log()

let myCreatedDate2 = new Date("2026-03-07") // here index start normally
console.log(myCreatedDate.toLocaleString())

console.log()

let myTimeStamp = Date.now() // counts miliseconds from 1 jan 1970 to now 
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime()) // counts miliseconds from 1 jan 1970 to 7 mar 2026.
console.log(Math.floor(Date.now() / 1000)) // convert milliseconds to seconds

let newDate = new Date()
console.log(newDate)
console.log((newDate.getMonth()) + 1) // get month with indexing from 0  
console.log((newDate.getDay()) + 1)

console.log(`Right now the time is ${newDate.toLocaleTimeString()} and date is ${newDate.toLocaleDateString()}`)

console.log('\n')

newDate.toLocaleString('Default', {
    weekday: "long",
    // timeZone:
})