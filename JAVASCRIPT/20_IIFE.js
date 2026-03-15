// Immediately Invoked Function Expressions (IIFE)
// need - To stop creating problem in the function because of global scope.
//      - immediately Execution.

// (function)()

(function first() {
    console.log(`DB CONNECTED`)
})();

// ; -> to stop/end the Invoked function.

(function second() {  // Named IIFE
    console.log(`DB CONNECTED TWO`)
})();


( (name) => {  // Arrow function (unnamed IIFE)
    console.log(`DB CONNECTED THREE ${name}`)
})("Adarsh")



