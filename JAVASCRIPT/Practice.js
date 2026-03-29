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

    

})(); // End of IIFE