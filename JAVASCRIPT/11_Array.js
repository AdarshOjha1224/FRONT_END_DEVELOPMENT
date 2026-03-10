
const myArr = [1, 2, true, "Adarsh", null, undefined]
console.log(myArr)
const nums = [0, 1, 2, 3, 4, 5, 6]


const arrr = new Array(0,2,4,6,8,10,12,14,16,18) // Decleration of Array 

// Arrays are resizable and can contain differnt type of datatypes.
// array copy operation creates the shallow copies. (shallow copies - same reference which means can make changes in the original array)

console.log(myArr[4])
console.log(arrr[8])

myArr.push("Ojha")
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(8)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes("hello"))
console.log(myArr.indexOf(true))
console.log(myArr.indexOf(0))

const newArr = myArr.join()
console.log("Array : ",myArr)
console.log(newArr)
console.log(typeof newArr)

console.log(myArr.slice(1,3))
console.log(myArr)

console.log(myArr.splice(1,3))
console.log(myArr)



// ==========================================
// INITIAL SETUP
// ==========================================
// let arr = [10, 20, 30, 40, 50];
// console.log("Initial Array:", arr);

// // 1. Basic Properties
// console.log("length:", arr.length); // 5
// console.log("constructor:", arr.constructor === Array); // true

// // ==========================================
// // SEARCHING & ACCESSING (Non-mutating)
// // ==========================================
// console.log("\n--- Searching & Accessing ---");
// console.log("at(-1):", arr.at(-1)); // 50 (last element)
// console.log("includes(30):", arr.includes(30)); // true
// console.log("indexOf(20):", arr.indexOf(20)); // 1
// console.log("lastIndexOf(20):", arr.lastIndexOf(20)); // 1 (same here, but searches right-to-left)
// console.log("find (> 25):", arr.find(x => x > 25)); // 30
// console.log("findIndex (> 25):", arr.findIndex(x => x > 25)); // 2
// console.log("findLast (> 25):", arr.findLast(x => x > 25)); // 50
// console.log("findLastIndex (> 25):", arr.findLastIndex(x => x > 25)); // 4

// // ==========================================
// // ITERATION & TRANSFORMATION (Non-mutating)
// // ==========================================
// console.log("\n--- Iteration & Transformation ---");
// console.log("every (> 0):", arr.every(x => x > 0)); // true (all elements are > 0)
// console.log("some (> 45):", arr.some(x => x > 45)); // true (at least one is > 45)
// console.log("map (x * 2):", arr.map(x => x * 2)); // [20, 40, 60, 80, 100]
// console.log("filter (> 25):", arr.filter(x => x > 25)); // [30, 40, 50]
// console.log("reduce (sum):", arr.reduce((acc, curr) => acc + curr, 0)); // 150
// console.log("reduceRight (string concat):", arr.reduceRight((acc, curr) => acc + curr, "")); // "5040302010"

// // forEach executes a function for each element but returns undefined
// process.stdout?.write("forEach output: ");
// arr.forEach(x => process.stdout?.write(x + " ")); // 10 20 30 40 50
// console.log();

// // ==========================================
// // CREATING NEW ARRAYS (Non-mutating)
// // ==========================================
// console.log("\n--- Creating New Arrays ---");
// console.log("concat:", arr.concat([60, 70])); // [10, 20, 30, 40, 50, 60, 70]
// console.log("slice(1, 4):", arr.slice(1, 4)); // [20, 30, 40]
// console.log("flat:", [1, [2, 3], [[4]]].flat(2)); // [1, 2, 3, 4]
// console.log("flatMap:", arr.flatMap(x => [x, x/10])); // [10, 1, 20, 2, 30, 3, 40, 4, 50, 5]

// // Modern ES2023 Non-Mutating Methods
// console.log("toReversed:", arr.toReversed()); // [50, 40, 30, 20, 10]
// console.log("toSorted:", arr.toSorted((a, b) => b - a)); // [50, 40, 30, 20, 10]
// console.log("toSpliced(1, 2):", arr.toSpliced(1, 2, 99)); // [10, 99, 40, 50]
// console.log("with(2, 999):", arr.with(2, 999)); // [10, 20, 999, 40, 50]

// // ==========================================
// // ITERATORS & SYMBOLS
// // ==========================================
// console.log("\n--- Iterators & Symbols ---");
// console.log("keys:", [...arr.keys()]); // [0, 1, 2, 3, 4]
// console.log("values:", [...arr.values()]); // [10, 20, 30, 40, 50]
// console.log("entries:", [...arr.entries()]); // [[0, 10], [1, 20], ...]
// console.log("Symbol.iterator:", [...arr[Symbol.iterator]()]); // Same as values()
// console.log("Symbol.unscopables:", arr[Symbol.unscopables]); // { copyWithin: true, entries: true, fill: true, ... }

// // ==========================================
// // STRING FORMATTING
// // ==========================================
// console.log("\n--- String Formatting ---");
// console.log("join('-'):", arr.join('-')); // "10-20-30-40-50"
// console.log("toString:", arr.toString()); // "10,20,30,40,50"
// console.log("toLocaleString:", [1000.5, 2000].toLocaleString('en-US')); // "1,000.5,2,000"

// // ==========================================
// // MUTATING METHODS (Changes the original array)
// // ==========================================
// console.log("\n--- Mutating Methods ---");
// arr.push(60);
// console.log("After push(60):", arr); // [10, 20, 30, 40, 50, 60]

// let popped = arr.pop();
// console.log("After pop():", arr, `| Popped: ${popped}`); // [10, 20, 30, 40, 50] | Popped: 60

// arr.unshift(0);
// console.log("After unshift(0):", arr); // [0, 10, 20, 30, 40, 50]

// let shifted = arr.shift();
// console.log("After shift():", arr, `| Shifted: ${shifted}`); // [10, 20, 30, 40, 50] | Shifted: 0

// arr.reverse();
// console.log("After reverse():", arr); // [50, 40, 30, 20, 10]

// arr.sort((a, b) => a - b);
// console.log("After sort():", arr); // [10, 20, 30, 40, 50]

// arr.splice(2, 1, 99);
// console.log("After splice(2, 1, 99):", arr); // [10, 20, 99, 40, 50]

// arr.copyWithin(0, 3, 5);
// console.log("After copyWithin(0, 3, 5):", arr); // [40, 50, 99, 40, 50]

// arr.fill(7, 1, 3);
// console.log("After fill(7, 1, 3):", arr); // [40, 7, 7, 40, 50]

// // ==========================================
// // INHERITED OBJECT PROTOTYPE METHODS
// // ==========================================
// console.log("\n--- Inherited Object Methods ---");
// let objArr = [100, 200];

// console.log("hasOwnProperty(0):", objArr.hasOwnProperty(0)); // true (index 0 exists)
// console.log("propertyIsEnumerable(0):", objArr.propertyIsEnumerable(0)); // true
// console.log("isPrototypeOf:", Array.prototype.isPrototypeOf(objArr)); // true
// console.log("valueOf:", objArr.valueOf()); // [100, 200]
// console.log("__proto__:", objArr.__proto__ === Array.prototype); // true

// // Note: The following are legacy/deprecated Object methods but are included for completeness based on your list.
// // Modern JavaScript uses Object.defineProperty() and Object.getOwnPropertyDescriptor() instead.
// objArr.__defineGetter__('customLength', function() { return this.length * 2; });
// console.log("__defineGetter__ test (customLength):", objArr.customLength); // 4

// objArr.__defineSetter__('customFirst', function(val) { this[0] = val; });
// objArr.customFirst = 999;
// console.log("__defineSetter__ test:", objArr[0]); // 999

// console.log("__lookupGetter__:", typeof objArr.__lookupGetter__('customLength')); // "function"
// console.log("__lookupSetter__:", typeof objArr.__lookupSetter__('customFirst')); // "function"

// ======================================================================================================

const marvel_heros = ["thor", "Ironman", "Hulk", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash", "Joker"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[4][1])

const allHeros = marvel_heros.concat(dc_heros) // return new array thats why need new const which can hold its value.
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
console.log(all_new_heros)

const another_array = [0, 1, 3, [4, 5, 6], 7,[8, 9,[10, 11, 12], [13, 14]], 15]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// DATA SCRAPING

console.log(Array.isArray("Adarsh")) // false
console.log(Array.from("Adarsh"))
console.log(Array.from({ name: "Adarsh" })) // interesting case - have to tell make array of keys/array

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1, score2, score3))

