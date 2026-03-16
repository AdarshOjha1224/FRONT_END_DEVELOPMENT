const loggedIn = true 
if (loggedIn) {
    console.log("Adarsh")
}

// < , > , <= , >= , == , != , === (also checks datatype)

if (2 == "2") {
    console.log(`2 == "2"`);
}
if (!(2 === "2")) {
    console.log()
}

const score = 300 
if (score > 100) {
    let power = "FLYY"
    console.log(`User Power : ${power}`)
}

// console.log(`User Power : ${power}`) // ERROR because of Scope.

const balance = 7000
// if (balance > 8000) console.log("Greater than 8000"), console.log("RICH $$$"); // Implicit Scope

if (balance < 5000) {
    console.log(`${balance} is less then 5000}`)
} else if (balance < 8000) {
    console.log(`${balance} greater then 5000 and less then 8000`)
} else {
    console.log(`${balance} greater then 8000`)
}

const userLoggedIn = true 
const debitCard = true 
const loggedInFromEmail = true 
const loggedInFromGoogle = false 

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses !")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged-In")
}

