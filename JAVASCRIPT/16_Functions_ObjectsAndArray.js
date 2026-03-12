function calculateCartPrice(...num1){ // ... -> Rest operator or Spread operator according to the use.
    return num1 
}
console.log(calculateCartPrice(300,400,500,1000,1500,2000)) // fill them in a array.



function calculateCartPrice2(val1 , val2 , ...num1){
    return num1 
}
console.log(calculateCartPrice2(300,400,500,1000,1500,2000)) // output ->> [500,1000,1500,2000]

const user = {
    username : "Adarsh",
    product : "Bluetooth Speaker",
    price : 2999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} buy a ${anyObject.product} and its price is ${anyObject.price}`)
}

handleObject(user) // call function and passing the existing object.

handleObject({ // using function and passing the object in it.
    username: "Aman",
    product: "Table",
    price: 2999
})

const myNewArray = [10,20,30,40]

function returnSecondValue(getArray){
    return getArray
}


console.log(returnSecondValue(myNewArray)) // call function and passing the existing array.
console.log(returnSecondValue([100,200,300,400])) // using function and passint the array in it.