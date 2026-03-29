// ==========================================
// 20_IIFE.js (Immediately Invoked Function Expression)
// 21_CodeExecution&CallStack.js (Demonstrated by the nested calls starting here)
// ==========================================
(function runApplication() {
    // ==========================================
    // 01_variable.js (let, const, var)
    // 17_Global&Local_scope.js (Global to this IIFE vs local below)
    // ==========================================
    const schoolName = "Tech Academy"; 
    let maxScore = 100;
    var systemStatus = "Online"; // var is function-scoped (or global if not in a function)

    // ==========================================
    // 02_DataTypes.js & 06_SummaryOfDataType.js
    // (Primitives: String, Number, Boolean, Null, Undefined, Symbol)
    // ==========================================
    let subjectString = "JavaScript";       // String
    let passingScore = 60;                  // Number
    let isAccredited = true;                // Boolean
    let pendingApproval = null;             // Null
    let futureFeature;                      // Undefined
    let uniqueId = Symbol("id");            // Symbol

    // ==========================================
    // 07_StackAndHeap.js (Value vs Reference memory)
    // ==========================================
    // Stack: Primitives copy by value
    let score1 = 50;
    let copyScore = score1;
    copyScore = 60; // score1 remains 50

    // Heap: Objects copy by reference
    let obj1 = { val: 10 };
    let obj2 = obj1;
    obj2.val = 20; // obj1.val also becomes 20

    // ==========================================
    // 08_Strings.js & 10_DataAndTime.js
    // ==========================================
    let currentDate = new Date();
    // String interpolation and methods
    let reportHeader = `--- ${schoolName.toUpperCase()} REPORT --- \nGenerated on: ${currentDate.toDateString()}\n`;
    console.log(reportHeader);

    // ==========================================
    // 03_ConversionOperation.js & 04_stringToNumberConversion.js
    // ==========================================
    let rawInput = "85.5";
    let numConversion1 = Number(rawInput);
    let numConversion2 = parseInt(rawInput);
    let numConversion3 = +rawInput; // Unary plus operator

    // ==========================================
    // 09_NumberAndMaths.js
    // ==========================================
    let roundedScore = Math.round(numConversion1); // 86
    let randomBonus = Math.floor(Math.random() * 5) + 1; // Random number 1-5

    // ==========================================
    // 11_Array.js, 12_Objects.js, 13_Objects_2.js (Nested Objects)
    // ==========================================
    const studentsData = [
        {
            [uniqueId]: 1,
            name: "Alice",
            isActive: true, // Truthy
            scores: { math: "95", science: 88, english: 92 } // Nested Object
        },
        {
            [uniqueId]: 2,
            name: "Bob",
            isActive: "", // Falsy (empty string)
            scores: { math: 45, science: 50, english: 40 }
        },
        {
            [uniqueId]: 3,
            name: "Charlie",
            isActive: "Yes", // Truthy (non-empty string)
            scores: { math: 75, science: 80, english: 78 }
        }
    ];

   

})(); // End of IIFE