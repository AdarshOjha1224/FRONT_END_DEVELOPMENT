function display() {
    console.log("This is Display")
}

display // function reference 
display() // function execute

function addTwoNumbers(num1, num2) { // passing input while creating function is parameters
    console.log(num1 + num2) 
}

function product(num1, num2) {
    return num1 * num2 
}

addTwoNumbers(56, 34) // 90    // passing input while calling function is arguments.
addTwoNumbers(34, "23") // 3423
addTwoNumbers(20, "a") // 20a
addTwoNumbers("23", 77) // 2377

const result = addTwoNumbers(4, 26)
console.log("Result : ", result)

const result2 = product(23, 45)
console.log("Product : ", result2) 

function loginMessage(userName = "Unknown Person") {
    // undefined = false value , "" = false value
    if (!userName) {          // if (userName === undefined) 
        console.log("Please enter a Username")
        return 
    }
    return `${userName} just logged In`
}

console.log(loginMessage("Adarsh")) // If value is passed then it will override the function's default value.
console.log(loginMessage()) // No value is passed.


