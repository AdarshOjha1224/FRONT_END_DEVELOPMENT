const userEmail = "adarsh123@gmail.com"

// here we assumed that the value of userEmail is a true
// If the userEmail is empty then it is interpreted as a false.
// Not doing any comparision here.

if (userEmail) {    
    console.log("Got user email");
} else {
    console.log("Don't have use email")
}

//  Falsy values ->>> false , 0 , -0 , BigInt (0n) , null , undefined , NaN
//  Tuthy Values ->>> Other then these values is called Truthy values
// Special Truthy values ->>> "0" , 'false' , " " , [] , {} , function(){}

const array = []
if (array.length === 0) {
    console.log("Array is Empty !");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { // Object.Keys(emptyObj) -> creates the array of keys of emptyObj.
    console.log("Object is Empty")
}

// In Browser's console ->>
//             false == 0 -> true
//             false == '' -> true
//             false == 0 -> true
//             0 == '' -> true

// Nullish Coalescing Operator (??) : null undefined

let val1 , val2 , val3 
// ?? is new operator which have 2nd value for backup if the first value has some error or non-accessible , it has complex function call which retrieve the value from the database so we can handle the situation in real run-time.
// val1 = first preference ?? (Complex Function)
val1 = null ?? 10
console.log(val1)

val2 = undefined ?? 15 
console.log(val2)

val3 = null ?? 10 ?? 15 // not good to use, but always prefer the first valid value.
console.log(val3)



// Terniary Operator->>>>
// Condition ? true : false

const IceCreamPrice = 100
IceCreamPrice >= 80 ? console.log("Expensive") : console.log("Cheap")


