// GLOBAL SCOPE

// var c = 300 
 let a = 150
 

// {} -> SCOPE 

if(true){  // BLOCK SCOPE
    let a = 100 
    const b = 200 
    console.log("Inner : ",a )
    
    var c = 300  // accessible out of scope 
}


console.log(a)
// console.log(b)
console.log(c)

// Global scope in browser and programming environment is different.