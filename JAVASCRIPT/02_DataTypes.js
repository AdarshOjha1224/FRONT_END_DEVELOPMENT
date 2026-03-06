"use strict"; // treat all JS code as newer version

// alert(8)   -> we are using nodejs , not browser

console.log(8); console.log("hello") 

// the above's line readablity is less then below's line. which needs semi-colon(;)

console.log(8)
console.log("hello")

let name = "Adarsh"
let age = 20 
let isLoggedIn = true 
let state = null


// PRIMITIVE DATATYPES ->>
// number => 2^53
// bigInt
// string => can use it which '' or ""(recommend)
// boolean => true/false
// null (standalone value)
// undefined
// symbol => unique

// OBJECTS ->>

console.log(typeof age) // number
console.log(typeof null) // object
console.log(typeof undefined) // undefined