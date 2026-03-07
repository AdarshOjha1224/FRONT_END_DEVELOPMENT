const Myname = "Adarsh" 
console.log(Myname)

const repoCount = 4
console.log(Myname + " " + repoCount + " value") // outdated format

// New and Efficient Method
console.log(`Hello my name is ${Myname.toUpperCase()} and my Repo Count is ${repoCount}`);

const gameName = new String('Adarsh Ojha')
console.log(gameName) // [String: 'Adarsh Ojha']
console.log(gameName[0]) // A
console.log(gameName.__proto__) // {}
console.log()
console.log(gameName.length) // 11
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2)) // a
console.log(gameName.indexOf('s')) // 4
console.log(gameName.substring(0, 4)) // Adar
console.log(gameName.substring(-1, 4)) // Adar
console.log(gameName.slice(-8, 4)) // r

console.log()

// Our primary example string (includes leading/trailing spaces and a Unicode emoji)
const str = "  Hello, JS World! 🚀  ";
const cleanStr = "Hello";

console.log(str.length);               // 23 (Property, not a method, returns total characters)
console.log(str.at(2));                // "H" (Allows negative indexing like .at(-1))
console.log(str.charAt(2));            // "H" (Older way to get a character)
console.log(str.charCodeAt(2));        // 72 (UTF-16 code unit of "H")
console.log(str.codePointAt(19));      // 128640 (Full Unicode code point, great for emojis like 🚀)


console.log(str.includes("JS"));       // true (Does it contain "JS"?)
console.log(str.indexOf("o"));         // 6 (First occurrence of "o")
console.log(str.lastIndexOf("o"));     // 13 (Last occurrence of "o")
console.log(str.startsWith("  H"));    // true (Does it start with this exact string?)
console.log(str.endsWith("🚀  "));     // true (Does it end with this exact string?)


console.log(str.slice(2, 7));          // "Hello" (Extracts from index 2 up to 7)
console.log(str.substring(2, 7));      // "Hello" (Similar to slice, but handles negative indices differently)
console.log(str.substr(2, 5));         // "Hello" (Deprecated: extracts 5 characters starting at index 2)
console.log(str.split(" "));           // ["", "", "Hello,", "JS", "World!", "🚀", "", ""] (Splits into array by spaces)
console.log(cleanStr.concat(" World"));// "Hello World" (Joins strings, though using `+` or `${}` is preferred)


console.log(str.replace("JS", "Web")); // "  Hello, Web World! 🚀  " (Replaces first match)
console.log(str.replaceAll("l", "L")); // "  HeLLo, JS WorLd! 🚀  " (Replaces all matches)
console.log(str.toLowerCase());        // "  hello, js world! 🚀  "
console.log(str.toUpperCase());        // "  HELLO, JS WORLD! 🚀  "
console.log(str.toLocaleLowerCase());  // "  hello, js world! 🚀  " (Respects local language rules)
console.log(str.toLocaleUpperCase());  // "  HELLO, JS WORLD! 🚀  "


console.log(str.trim());               // "Hello, JS World! 🚀" (Removes spaces from both ends)
console.log(str.trimStart());          // "Hello, JS World! 🚀  " (Removes spaces from start)
console.log(str.trimLeft());           // Alias for trimStart()
console.log(str.trimEnd());            // "  Hello, JS World! 🚀" (Removes spaces from end)
console.log(str.trimRight());          // Alias for trimEnd()


console.log(cleanStr.padStart(10, "*")); // "*****Hello" (Pads the start until length is 10)
console.log(cleanStr.padEnd(10, "*"));   // "Hello*****" (Pads the end until length is 10)
console.log(cleanStr.repeat(3));       // "HelloHelloHello" (Repeats the string 3 times)


console.log(str.search(/JS/));         // 9 (Returns index of first regex match)
console.log(str.match(/[A-Z]/g));      // ["H", "J", "S", "W"] (Returns array of all matches)
const matches = str.matchAll(/l/g);    
console.log([...matches]);             // Returns an iterator of detailed match objects


console.log(str.isWellFormed());       // true (Checks if string has valid Unicode surrogates)
console.log(str.toWellFormed());       // "  Hello, JS World! 🚀  " (Fixes broken Unicode surrogates)
console.log(str.normalize('NFC'));     // Standardizes Unicode characters (useful for accents)
console.log(cleanStr.localeCompare("Hi")); // -1 (Compares sorting order: "Hello" comes before "Hi")
console.log(str.toString());           // "  Hello, JS World! 🚀  " (Returns the string itself)
console.log(str.valueOf());            // "  Hello, JS World! 🚀  " (Returns the primitive value)
console.log(str.constructor);          // [Function: String] (The function that created the instance)


// Symbol.iterator allows strings to be looped over (e.g., in a for...of loop)
const iterator = str[Symbol.iterator]();
console.log(iterator.next().value);    // " " (Yields the first character)


console.log(cleanStr.anchor("top"));   // <a name="top">Hello</a>
console.log(cleanStr.big());           // <big>Hello</big>
console.log(cleanStr.blink());         // <blink>Hello</blink>
console.log(cleanStr.bold());          // <b>Hello</b>
console.log(cleanStr.fixed());         // <tt>Hello</tt>
console.log(cleanStr.fontcolor("red"));// <font color="red">Hello</font>
console.log(cleanStr.fontsize(7));     // <font size="7">Hello</font>
console.log(cleanStr.italics());       // <i>Hello</i>
console.log(cleanStr.link("url.com")); // <a href="url.com">Hello</a>
console.log(cleanStr.small());         // <small>Hello</small>
console.log(cleanStr.strike());        // <strike>Hello</strike>
console.log(cleanStr.sub());           // <sub>Hello</sub>
console.log(cleanStr.sup());           // <sup>Hello</sup>