// Stack -> Used by Primitive 
//       -> You get a copy here
// Heap  -> Used by Non-primitive
//       -> You get a reference of original value.

let User1 = {
    email: "User1@gmail.com",
    upi: "user1@axl"
}
let User2 = User1

User2.email = "User2@gmail.com"
console.log(User1.email) // User2@gmail.com
console.log(User2.email) // User2@gmail.com

// Here User1 and User2 is Non-primitive , so they present in the heap which means they referring to the same address. Change will lead to changes in both.

