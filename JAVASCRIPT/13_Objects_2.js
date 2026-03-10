// const instaUser = new Object()
//  // Singleton Object.

const instaUser = {} // Non-singleton Object

instaUser.id = "adarshojha1224"
instaUser.name = "Adarsh"
instaUser.isLoggedIn = false
console.log(instaUser)

console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty('isLoggedIn'))

const regularUser = {
    email: "adarsh@gmail.com",
    fullName: {
        UserFullName: {
            firstName: "Adarsh",
            lastName: "Ojha"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullName)
console.log(regularUser.fullName.UserFullName)
console.log(regularUser.fullName.UserFullName.firstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj3 = { obj1, obj2 }

// const newObj = Object.assign({},obj1,obj2,obj3)        
//// assign(Target,Source) , Target=> {} & Source=> obj1,obj2,obj3 , {} for better syntax
// console.log(newObj)

const newObj2 = { ...obj1, ...obj2, ...obj3 }
console.log(newObj2)

const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    },
    {
        id: 4,
        email: "4@gmail.com"
    },
    {
        id: 5,
        email: "5@gmail.com"
    },
    {
        id: 6,
        email: "6@gmail.com"
    }

]

// console.log(users)



// ==========================================
// 1. Setup & Object Creation
// ==========================================
const baseVehicle = { vehicleType: 'Automobile' };

// Object.create(): Creates a new object using an existing object as the prototype.
const myCar = Object.create(baseVehicle);
myCar.brand = 'Toyota';

// Object.assign(): Copies all enumerable own properties from source object(s) to a target.
Object.assign(myCar, { model: 'Camry', year: 2024 });

// ==========================================
// 2. Property Definition & Descriptors
// ==========================================
// Object.defineProperty(): Defines a new property or modifies an existing one directly.
Object.defineProperty(myCar, 'vin', {
  value: '12345ABC',
  writable: false,
  enumerable: false, // Will hide it from Object.keys
  configurable: false
});

// Object.defineProperties(): Defines multiple properties at once.
Object.defineProperties(myCar, {
  color: { value: 'Red', writable: true, enumerable: true, configurable: true },
  engine: { value: 'V6', writable: false, enumerable: true, configurable: false }
});

// Object.getOwnPropertyDescriptor(): Gets the descriptor for a specific own property.
console.log("Descriptor for 'vin':", Object.getOwnPropertyDescriptor(myCar, 'vin'));

// Object.getOwnPropertyDescriptors(): Gets descriptors for all own properties.
console.log("All Descriptors:", Object.getOwnPropertyDescriptors(myCar));

// ==========================================
// 3. Keys, Values, Entries & Symbols
// ==========================================
const hiddenId = Symbol('id');
myCar[hiddenId] = 999;

// Object.keys(): Array of own enumerable string-keyed property names.
console.log("Keys:", Object.keys(myCar));

// Object.values(): Array of own enumerable property values.
console.log("Values:", Object.values(myCar));

// Object.entries(): Array of own enumerable [key, value] pairs.
console.log("Entries:", Object.entries(myCar));

// Object.getOwnPropertyNames(): Array of ALL string properties (enumerable or not).
console.log("Own Property Names:", Object.getOwnPropertyNames(myCar));

// Object.getOwnPropertySymbols(): Array of all symbol properties.
console.log("Own Property Symbols:", Object.getOwnPropertySymbols(myCar));

// Object.fromEntries(): Transforms a list of key-value pairs into an object.
const extraData = [['mileage', 15000], ['condition', 'Excellent']];
const carStats = Object.fromEntries(extraData);
console.log("From Entries (carStats):", carStats);

// ==========================================
// 4. Checking Properties & Equality
// ==========================================
// Object.hasOwn(): Modern way to check if an object has a property as its own.
console.log("Has own 'brand'?", Object.hasOwn(myCar, 'brand'));

// Object.is(): Determines if two values are the exact same value (better than === for NaN and -0).
console.log("Is myCar.brand 'Toyota'?", Object.is(myCar.brand, 'Toyota'));

// ==========================================
// 5. Prototypes
// ==========================================
// Object.getPrototypeOf(): Returns the prototype of the object.
console.log("Current Prototype:", Object.getPrototypeOf(myCar));

// Object.setPrototypeOf(): Changes the prototype of an object (use sparingly for performance).
const modernVehicle = { vehicleType: 'Modern Automobile', hasWheels: true };
Object.setPrototypeOf(myCar, modernVehicle);
console.log("New Prototype hasWheels:", myCar.hasWheels);

// ==========================================
// 6. Grouping (Modern JS Feature)
// ==========================================
const fleet = [
  { name: "Camry", type: "sedan" },
  { name: "Corolla", type: "sedan" },
  { name: "RAV4", type: "suv" }
];
// Object.groupBy(): Groups items in an iterable based on a callback.
const groupedFleet = Object.groupBy(fleet, (car) => car.type);
console.log("Grouped Fleet:", groupedFleet);

// ==========================================
// 7. Instance Methods (From Object.prototype)
// ==========================================
console.log("hasOwnProperty('model'):", myCar.hasOwnProperty('model'));
console.log("isPrototypeOf():", modernVehicle.isPrototypeOf(myCar));
console.log("propertyIsEnumerable('color'):", myCar.propertyIsEnumerable('color'));
console.log("toString():", myCar.toString());
console.log("toLocaleString():", myCar.toLocaleString());
console.log("valueOf():", myCar.valueOf());

// ==========================================
// 8. Legacy / Deprecated Methods
// ==========================================
// These are deprecated in modern JS but still supported in engines.
myCar.__defineGetter__('description', function() {
    return `${this.color} ${this.brand} ${this.model}`;
});

myCar.__defineSetter__('updateColor', function(val) {
    this.color = val;
});

myCar.updateColor = 'Blue';
console.log("Legacy Getter Output:", myCar.description);

console.log("Lookup Getter:", myCar.__lookupGetter__('description'));
console.log("Lookup Setter:", myCar.__lookupSetter__('updateColor'));

// __proto__ accessor
console.log("Access via __proto__:", myCar.__proto__ === modernVehicle);

// ==========================================
// 9. Static Properties of the Object Constructor
// ==========================================
console.log("Constructor:", myCar.constructor.name); // Usually points to "Object"
console.log("Object.length:", Object.length); // 1 (Expected number of arguments)
console.log("Object.name:", Object.name); // "Object"
console.log("Object.prototype exists?", !!Object.prototype); // true

// Note on `arguments` and `caller`: 
// These are legacy properties of Function objects (Object is a function). 
// Accessing them in modern/strict mode usually throws an error or returns null.
try { console.log(Object.arguments); } catch (e) { console.log("arguments: Restricted"); }
try { console.log(Object.caller); } catch (e) { console.log("caller: Restricted"); }

// ==========================================
// 10. Object State: Extending, Sealing, Freezing
// ==========================================
// We use new objects here so we don't accidentally lock `myCar` during the demo.

// Prevent Extensions: Cannot add new properties, but can delete/modify existing ones.
const extObj = { a: 1 };
Object.preventExtensions(extObj);
console.log("Is extObj extensible?", Object.isExtensible(extObj)); // false

// Seal: Cannot add/delete properties. Existing properties can be modified if writable.
const sealedObj = { b: 2 };
Object.seal(sealedObj);
console.log("Is sealedObj sealed?", Object.isSealed(sealedObj)); // true

// Freeze: Cannot add, delete, or modify properties. The highest level of immutability.
const frozenObj = { c: 3 };
Object.freeze(frozenObj);
console.log("Is frozenObj frozen?", Object.isFrozen(frozenObj)); // true

