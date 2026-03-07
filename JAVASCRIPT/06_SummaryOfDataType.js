// Datatypes -> call by value and call by data

// @ PRIMITIVE
// 7 Types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100 
const flag = false
const scoreValue = 100.5
let userEmail; 

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(typeof id) // symbol

console.log(id == anotherId) // false

const BigNumber = 453452452542412341234n
console.log(typeof BigNumber) // bigint


// DYANMICALLY TYPED

// @ REFERENCE (Non-Primitive)
// Types : Array , Objects , Functions ,

const heros = ["IronMan", "CaptainAmerica", "Vision", "Thor"]
let myObj = {
    name: "Adarsh",
    age:21
}
console.log(myObj) // { name: 'Adarsh', age: 21 }
console.log(typeof myObj) // object
console.log(heros) // [ 'IronMan', 'CaptainAmerica', 'Vision', 'Thor' ]
console.log(typeof heros) // object

const myFunc = function () {
    console.log("Hello !")
}

myFunc() // Hello !

console.log(typeof myFunc) // function
