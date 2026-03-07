console.log(2 < 3) // true

console.log("2" > 1) // true -js automatic convert the "2" into 2 to compare
console.log("02" < 0) // false


// AVOID THESE TYPE OF COMPARISION ->>>>

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comaparisons convert null to a number, treating it as 0.
// That's why (null >= 0) is true and (null > 0) is false.

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// === -> check the datatype first and then compare them
// doesn't change the datatype like == 

log.console("2" === 2)