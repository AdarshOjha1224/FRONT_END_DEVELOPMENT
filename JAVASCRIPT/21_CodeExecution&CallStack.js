//    CODE EXECUTION ->>>>>>>>>>>>>>>>>>>

// JavaScript Execution Context
// {} -> Global EC (stored in "this")
// Executes on Single Thread.

// - Global EC**
// - Function EC**
// - Eval EC (property of Global)

// {} Runs in two phase -
// 1st - Memory Creation Phase (memory allocate for variables )
// 2nd - Execution Phase (Executes Operations)

let val1 = 10 
let val2 = 50 
function addNums(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNums(val1, val2)
let result2 = addNums(26,34)

// Steps of Code Execution ->>>
// ============================================================================
// Step 1 - Global Execution -> this
// ============================================================================
// Step 2 - Memory Phase -> Allocate memory for variable ,stores Undefined in them and Stores Definitions in Functions.
//         val1 -> undefined
//         val1 -> undefined
//         addNums -> definition
//         result1 -> undefined
//         result2 -> undefined
// ============================================================================
// Step 3 - Execution Phase -> Store the values in the varibles which is in the memory

// EXECUTION OF LINE 19 ->>>>>

//(1)  val1 <- 10
//(2)  val2 <- 50
//(3)  result1
//           addNum -> New Executional Context(BOX) which is created for function
//                   "function addNums(num1, num2) {
//                      let total = num1 + num2
//                      return total
//                    }"

//                        New Executional Context(BOX)
//                                     |
//                         (New Variable environment
//                                     +
//                              Execution Thread)

//           Whenever a Function(here , for line 19) runs then a
//           Box is created -> Memory Phase -> Execution Phase.

//           Again execution for new executional context(Box)

//                 Memory Phase -
//                      val1 -> undefined
//                      val2 -> undefined
//                      total1 -> undefined

//                 Execution Context -
//                      num1 <- 10
//                      num2 <- 50
//                      total <- 60 , Return back at Global Executional Context
//                      (Step 1 of Code Execution)

//           **DELETED WHEN THE EXECUTION CONTEXT (BOX) IS COMPLETED**

//           result = 60

//(4) result2
//      Similarly,
//           New Execution context(Box) = NVE + ET
//           Box -> Memory phase -> Execution Phase
//           Again execution for new executional context(Box)
//           Memory Phase -
//                      total2 -> undefined

//                 Execution Context -
//                      num1 <- 26
//                      num2 <- 34
//                      total <- 60 , Return back at Global Executional Context
//                      (Step 1 of Code Execution)

//           **DELETED WHEN THE EXECUTION CONTEXT (BOX) IS COMPLETED**

//           result2 = 60

// ==============================================================================
// ==============================================================================


//     CALL STACK ->>>>>>>>>>>>>> Follows LIFO

//                        |          |
//                        |          |
//                        |          |
//                        |          |
//                        |          |
//                        |__________|
//                        |Glob.Exec.|
//                        |__________|

function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}

one()
//                        |  three() |
//                        |__________|
//                        |  two()   |
//                        |__________|
//                        |  one()   |
//                        |__________|
//                        |Glob.Exec.|
//                        |__________|


two()
//                        |          |
//                        |          |
//                        |  three() |
//                        |__________|
//                        |  two()   |
//                        |__________|
//                        |Glob.Exec.|
//                        |__________|


three()
//                        |          |
//                        |          |
//                        |  three() |
//                        |__________|
//                        |Glob.Exec.|
//                        |__________|

// execute this code in Browser
// Inspect -> Source -> Snippets
// run this code , See how the call Stack working. 
