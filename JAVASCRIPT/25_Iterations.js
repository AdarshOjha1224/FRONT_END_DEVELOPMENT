// for loop ->>>

for (let i = 1; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Outer loop value : ${i} , Inner loop value : ${j}`)
//         console.log(`${i} X ${j} = ${i*j}`)
//     }
//     console.log();
// }

let myArray = ["SuperMan", "BatMan", "Flash", "WonderWoman", "Joker", "Shazam"]
for (let index = 0; index <= myArray.length; index++) { // there is no outofbound problem in JS , it just show simply undefined value.
    const element = myArray[index];
    console.log(element)
}

// break , continue ->>>

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 Detected`)
//         break
//     }
//     console.log(`value of i is ${i}`);
// }

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 Detected`)
//         continue
//     }
//     console.log(`value of i is ${i}`);
// }


// while loop ->>>

let i = 0 
while (i <= 10) {
    console.log(`value of i is in while ${i}`)
    i += 2 
}

let arr = 0 
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++
}


// Do-while loop ->>>

let score = 11
do {
    console.log(`Score is ${score}`)
    score++
    
} while (score <= 10);
