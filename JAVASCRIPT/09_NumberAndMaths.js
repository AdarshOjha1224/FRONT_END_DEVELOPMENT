const score = 100 
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // make upto 2 decimal values =>    100 -> 100.00

const OtherNumber = 423.8902
console.log(OtherNumber.toPrecision(5)) // 423.89
console.log(OtherNumber.toPrecision(3)) // 424
console.log(OtherNumber.toPrecision(2)) // 4.2e+2

const hundreds = 10000000
console.log(hundreds.toLocaleString()) // 1,00,00,000

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MAX_SAFE_INTEGER) // 007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

console.log("\n")

/// -------------------------------- MATHS ---------------------------------- ///


console.log(Math); // its a object which has many properties (mathematical function)
console.log(Math.abs(-45)) // make number +ve
console.log(Math.round(34.56))
console.log(Math.ceil(5.2))
console.log(Math.floor(5.9))
console.log(Math.min(3, 4, 7, 34, -2)); 
console.log(Math.max(-2, 5, -23, 45, 55));

console.log("\n")

// Random value lie between 0 and 1 
console.log(Math.random());
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

console.log("\n")

const min = 8
const max = 22 

// max - min = range , if given max=min so we add 1
// if Math.floor(Math.random() * (max - min + 1)) gives you 0 so we add min, so we can get min value atleast.
console.log(Math.floor(Math.random() * (max - min + 1)) + min)