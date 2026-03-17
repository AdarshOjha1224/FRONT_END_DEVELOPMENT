// FOR-OF loops ->>>>

// ["","","","",""] Array of string
// [{},{},{},{},{}] Array of Objects 

const arr = [1, 2, 3, 4, 5, 6]
for (const ele of arr) { 
    console.log(ele);
}

console.log(1)

const greetings = "Namaste India"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

console.log(2)

// Maps
// map object holds key-value pairs and remember the original insertion order of the keys.

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('UK', "United Kingdom")
map.set('IN', "India")


console.log(map)
console.log(3)

// this will give key and Pair both
for (const key of map) {
    console.log(key)
}
console.log(4)


// this will give key and pair alag alag.
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}
console.log(5)


// for-in -> neither giving error nor output
for (const key in map) {
    console.log(key);
}
console.log(6)



// const myObject = {  // myObject is not iterable
//     'game1': 'NFS',
//     'game2': 'GTA',
//     'game3': 'CSGO'
// }

// const myObject = { // this is also not iterable
//     game1: 'NFS',
//     game2: 'GTA',
//     game3: 'CSGO'
// }

// // for-of is not working for object
// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);
// }


const myObject = {
    js: "JavaScript",
    cpp: "C++",
    kt: "Kotlin",
    jsx: "React"
}
// for-of is not iterable in object

// USING FOR-IN LOOP IN OBJECT (Working)
// Print all the keys.
for (const key in myObject) {
    console.log(key)
}
console.log(7)

// Print all the values.
for (const key in myObject) {
    console.log(myObject[key]);
}
console.log(8)

// combine both to print both alg alg
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
console.log(9)



const heros = ["Ironman", "SpiderMan", "Doctor Strange", "Hulk", "Thor", "Captain America"]

// FOR IN LOOP ->>>>
// Keys of Array elements are start from 0 (like Index**)

// Keys
for (const key in heros) {
    console.log(key);
}
console.log(10)

// Values
for (const key in heros) {
    console.log(heros[key])
}
console.log(11)


// FOR-EdACH lOOP (which is prototype of array - "Higher Order function") ->>>>
// forEach - value is a parameter which takes element of array automatically in every iteration.
heros.forEach(function (value) { 
    console.log(value); 
})
console.log(12)

heros.forEach((value) => { 
    console.log(value);
})
console.log(13)


// declaring function first then calling in a loop 
function printMe(value) {
    console.log(value)
}
heros.forEach(printMe)

console.log(14)

// function have more things to access other than just elements of array or Object
heros.forEach((value , index , heros) => {
    console.log(value,index,heros);
})

console.log(15)

// Array of Object (Very Common Format/Scenerio)
const myCoding = [
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "Java"
    },
    {
        langName: "Kotlin",
        langFileName: "kt"
    },
    {
        langName: "React",
        langFileName: "jsx"
    },
    {
        langName: "Python",
        langFileName: "py"
    }
]

myCoding.forEach((value) => {
    console.log(value.langName);
})

