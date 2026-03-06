let score1 = "35"
console.log(typeof score1)  // string
console.log(typeof (score1))  // string
let valueInNumber = Number(score1)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // Not a Number NaN
console.log()
let score2 = "35abc"
console.log(typeof score2) // string
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)  // number
console.log(valueInNumber2) // NaN
console.log()
let score3 = null
console.log(typeof score3) // object
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3) // number
console.log(valueInNumber3) // 0
console.log()
let score4 = undefined
console.log(typeof score4) // undefined
let valueInNumber4 = Number(score4) 
console.log(typeof valueInNumber4) // number 
console.log(valueInNumber4) // NaN
console.log()
let score5 = true
console.log(typeof score5) // boolean
let valueInNumber5 = Number(score4) 
console.log(typeof valueInNumber5) // number 
console.log(valueInNumber5) // NaN
console.log()
let score6 = "Adarsh"
console.log(typeof (score6)) // string
let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6) // number
console.log(valueInNumber6) // NaN
console.log()
let isLoggedIn = 0 // 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // false, it will true on any value other than Zero.
console.log()
let isLoggedIn2 = "" // empty string
let booleanIsLoggedIn2 = Boolean(isLoggedIn2) // conversion
console.log(booleanIsLoggedIn2) // false
console.log()
let isLoggedIn3 = "Adarsh" // non-empty string
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3) // true
console.log()
let someNumber = 24
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
console.log()

