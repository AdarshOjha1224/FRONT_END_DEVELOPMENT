console.log(1);

const heros = ["Ironman", "SpiderMan", "Doctor Strange", "Hulk", "Thor", "Captain America", "Scarlet Witch", "Antman", "Black Panther", "Falcon", "Captain Marvel"]

// Try to understand the return of forEach loop
const Avengers = heros.forEach((value) => {
    console.log(value);
})
console.log(2)

console.log(Avengers); // Undefined -> which means forEach function not giving any return
console.log(3);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4 ) // it returns the values in form of Array , not like forEach
console.log(newNums);
console.log(4)

// using explicit return
const newNums2 = myNums.filter((num) => {  // if we dont use the {} scope then it return [] empty.
    return num > 4 
})
console.log(newNums2)
console.log(5)

// Deep Copy
const newNums3 = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums3.push(num)
    }
})
console.log(newNums3)
console.log(6)

const books = [
        {
         title:'Book one',
         genre:'Fiction',
         publish:1994,
         edition: 2014
        },
        {
         title:'Book two',
         genre:'History',
         publish:2011,
         edition: 2017
        },
        {
         title:'Book three',
         genre:'Non-fiction',
         publish:1997,
         edition: 2019
        },
        {
         title:'Book four',
         genre:'Science',
         publish:1999,
         edition: 2024
        },
        {
         title:'Book five',
         genre:'History',
         publish:1995,
         edition: 2025
        },
        {
         title:'Book six',
         genre:'Fiction',
         publish:2001,
         edition: 2008
        },
        {
         title:'Book seven',
         genre:'Non-finction',
         publish:1983,
         edition: 2020
        },
        {
         title:'Book eight',
         genre:'Science',
         publish:1981,
         edition: 2005
        },
        {
         title:'Book nine',
         genre:'Non-fiction',
         publish:1945,
         edition: 1997
        },
        {
         title:'Book ten',
         genre:'History',
         publish:1987,
         edition: 2013
        }
];
console.log(books)
console.log(7);

let userBooks = books.filter((bk) => bk.genre === "History")
console.log(userBooks);
console.log(8);

userBooks = books.filter((bk) => { return bk.publish >= 2000})
console.log(userBooks);
console.log(9);

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
console.log(10);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNumbers = myNumbers.map((num) => num + 10)
console.log(newNumbers);
console.log(11);

newNumbers = myNumbers.map((num) => { return num + 10})
console.log(newNumbers);
console.log(12);

newNumbers = myNumbers.forEach((values) => {
    console.log(values)
})
console.log(13);
console.log(newNumbers)



// CHAINING ->>>> using miltiple function like a chain.
// map -> it will perform Operation.
// Filter -> it will work on true/false condition.
console.log(14);
const arr = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(arr);


/// REDUCE ->>>> 
console.log(15);
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// normal function->>
const total = array1.reduce(function (acc, currVal) {
    console.log(`accumulator: ${acc} and Current-value: ${currVal}`);
    return acc + currVal 
},0) // accumulator get the value which is written after the coma(,)
console.log(total);
console.log(16)

// Arrow Function->>
const total2 = array1.reduce((acc, currVal) => acc + currVal, 0)
console.log(total2)
console.log(17)


const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName:"Java course",
        price: 1999
    },
    {
        itemName:"Dev-Ops course",
        price: 4999
    },
    {
        itemName:"Python course",
        price: 1999
    },
    {
        itemName:"Machine Learning course",
        price: 6999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);