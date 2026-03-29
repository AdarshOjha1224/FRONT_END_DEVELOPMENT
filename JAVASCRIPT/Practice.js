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

    // ==========================================
    // 18_ScopeLevel&Hoisting.js
    // ==========================================
    // Hoisting: We can call this function before it's declared
    hoistedWelcomeMessage(); 
    
    function hoistedWelcomeMessage() {
        // Block Scope demonstration
        if (true) {
            let blockVar = "I stay in this block";
            var functionVar = "I leak out of the if-block";
        }
        // console.log(blockVar); // This would throw a ReferenceError
        // console.log(functionVar); // This works
    }

    // ==========================================
    // 19_ThisAndArrowFunction.js
    // ==========================================
    const schoolSystem = {
        name: "Tech Academy Backend",
        printSystemName: function() {
            // 'this' refers to schoolSystem object
            console.log(`System: ${this.name}`);
        },
        // Arrow functions do NOT have their own 'this' context
        getArrowStatus: () => console.log(`Status is active.`)
    };
    schoolSystem.printSystemName();
    schoolSystem.getArrowStatus();

    // ==========================================
    // 22_Control_flow.js, 23_Switch.js, 24_truthy_and_falsy_Values.js
    // ==========================================
    function calculateGrade(score) {
        // Truthy/Falsy check
        if (!score && score !== 0) {
            return "Invalid Score";
        }

        // Comparison (05_Comparision.js: <, >=, ===)
        let category;
        if (score >= 90) category = "A";
        else if (score >= 70) category = "B";
        else if (score >= 50) category = "C";
        else category = "F";

        // Switch Statement
        switch(category) {
            case "A": return "Excellent";
            case "B": return "Good";
            case "C": return "Average";
            case "F": return "Fail";
            default: return "Unknown";
        }
    }

    // ==========================================
    // 14_Objects_3.js (Destructuring)
    // 15_Function.js
    // 16_Functions_ObjectsAndArray.js (Passing objects, Rest operator)
    // ==========================================
    function processStudentReport({ name, scores }, ...extraNotes) {
        // 26_loops_in_Array&Objects.js (for...in loop for objects)
        let total = 0;
        let subjectsCount = 0;
        
        for (const subject in scores) {
            // Coercing string scores back to numbers just in case
            total += Number(scores[subject]); 
            subjectsCount++;
        }
        
        let avg = total / subjectsCount;
        let gradeDesc = calculateGrade(avg);
        
        console.log(`Student: ${name} | Avg: ${avg.toFixed(2)} | Grade: ${gradeDesc}`);
        if (extraNotes.length > 0) console.log(`Notes: ${extraNotes.join(", ")}`);
    }

    // ==========================================
    // 25_Iterations.js (Standard Loops)
    // 26_loops_in_Array&Objects.js (for...of)
    // ==========================================
    console.log("\n--- PROCESSING ALL STUDENTS (Standard & for...of) ---");
    // Standard For Loop
    for (let i = 0; i < 1; i++) {
        console.log("Processing batch " + (i + 1) + "...");
    }

    // for...of loop for Arrays
    for (const student of studentsData) {
        // 24_truthy_and_falsy_Values.js checking if student is active
        if (student.isActive) {
            processStudentReport(student, "Active Member");
        } else {
            console.log(`Student: ${student.name} | Status: Inactive (Skipped)`);
        }
    }
    
    // ==========================================
    // 27_filterMapAndReduce.js
    // ==========================================
    console.log("\n--- ANALYTICS (Filter, Map, Reduce) ---");
    
    // 1. Filter out only the truthy/active students
    const activeStudents = studentsData.filter(student => student.isActive);

    // 2. Map to extract just their names
    const activeNames = activeStudents.map(student => student.name);
    console.log("Active Students List:", activeNames);

    // 3. Reduce to find the average math score of active students
    const totalMathScore = activeStudents.reduce((accumulator, currentStudent) => {
        return accumulator + Number(currentStudent.scores.math);
    }, 0);
    
    console.log(`Average Math Score (Active Students): ${totalMathScore / activeStudents.length}`);

})(); // End of IIFE