// Scope level and Mini Hoisting

// Nested Scope

function one(){
    const username = "Adarsh"
    
    function two(){
        const website = "Netflix"
        console.log(username)
    }
    
    // console.log(website)
    
    two()
}
one()

if (true) {
    const username = "Adarsh"
    if (username === "Adarsh") {
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website) // Error - Scope problem
}

// console.log(username) // Error - Scope problem



// ================================ INTERESTING ===============================

console.log(addone(5))
// decleration only.
function addone(num) {
    return num + 1 
}

// addtwo(5) // Error -> Not accessible because of HOISTING 

// decleration and hold it in a variable. 
const addtwo = function(num) { // A function but also call it expression.
    return num + 2
}

console.log(addtwo(5))

