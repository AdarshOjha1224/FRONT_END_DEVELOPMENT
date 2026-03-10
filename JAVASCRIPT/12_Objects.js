// singleton -> by constructor , is declare like literal then it will not singleton.
// Object.create  // Constructor technique

// object literal ->>>

const mySym1 = Symbol("key1")
const mySym2 = Symbol("Key2")


const User = {
    name: "Adarsh",
    // System take this as a "name" : "Adarsh" , both as a String.
    "full name": "Adarsh Ojha",
    mySym1 : "myKey1",
    [mySym2]: "myKey2",  // correct syntax for declaring Symbol as a key. 
                         // Print in the last in the values of Object.
    age: 21,
    location: "Gwalior",
    email: "adarshojha1224@gmail.com",
    isLoggedIn: true, 
    rollno: 1004 , 
    branch : "CSE-IOT"
}


console.log(User);

console.log(User.branch)
console.log(User["branch"])


console.log(User["full name"]) // to get "full name" , console.log(User.full name) is not possible

console.log(User.mySym1)
console.log(typeof User.mySym1)

console.log(User.mySym2); // wrong syntax for accessing the Symbol data type key.

console.log(User[mySym2]) // Correct syntax for accessing the Symbol data type key.
console.log(typeof User[mySym2])

User.email = "adarsh@1004gmail.com"
console.log(User.email);

// Object.freeze(User)

User.email = "adarsh@chatgpt.com"
console.log(User.email);

User.greeting = function () {
    console.log("Hello User !!!");
    
}

console.log(User.greeting)
console.log(User.greeting())

User.greetingTwo = function () {
    console.log(`Hello User ${this.name}`)
}

console.log(User.greetingTwo())




