
// BASIC ARROW FUNCTION

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(13,17))

// use return keywork because of {} , and if we have single line return statement then it can be written like --
// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(13, 17))

const name = () => ({ username: "Adarsh" }) // parenthises creates a block.
console.log(name())


// =================================================================

// This -> refer current context

const user = {
    username: "Adarsh",
    price: 1999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to Website`)
        console.log(this)
    }
}


user.welcomeMessage()
user.username = "Ojha"
user.welcomeMessage()

console.log(this) // {} empty object , there is no global context
// In Browser - Global Object is window object

function first1() {
    let username = "Adarsh"
    console.log(this)
    console.log(this.username) // this in not working in Outer function , working in object function.
}
first1()

const first2 = function () {      // Still not working this way..
    let username = "Adarsh"
    console.log(this)
    console.log(this.username)
}
first2()



const first3 = () => {
    let username = "Adarsh"
    console.log(this)
    console.log(this.username)
}
first3()

/*
        Here is the short answer:
        
        Normal functions have dynamic this. The value of this depends on how the function is called (the context).
        
        Arrow functions have lexical this. The value of this depends on where the function is defined. They do not have their own this; they inherit it from the surrounding scope
*/

// Normal Functions (Dynamic Scope) (Losing this)

// When you use a normal function inside a method, it forgets about the object it is inside. It acts like a completely independent function.

const user1 = {
  name: "Alice",
  greet: function() {
    
    // Nested normal function
    function innerFunction() {
      console.log("Hi, " + this.name); 
    }

    // Call it immediately
    innerFunction(); 
  }
};

user1.greet(); 
// Output: "Hi, undefined"

// The Arrow Function (Remembering this)
// Arrow functions are like a sponge—they soak up the this from whatever is wrapped around them. They don't care how they are called; they only care where you wrote them.

const user2 = {
  name: "Bob",
  greet: function() {
    
    // Nested arrow function
    const innerFunction = () => {
      console.log("Hi, " + this.name); 
    }

    // Call it immediately
    innerFunction(); 
  }
};

user2.greet(); // Output: "Hi, Bob"


// The Mistake: Arrow Functions as Main Methods
// Because arrow functions soak up this from their surroundings, you should not use them for the main object methods.

const user3 = {
  name: "Charlie",
  
  // Arrow function as a main method
  greet: () => {
    console.log("Hi, " + this.name);
  }
};

user3.greet(); 
// Output: "Hi, undefined"





