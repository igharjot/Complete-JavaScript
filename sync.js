
//             S Y N C H R O N O U S  Programming - 
//  - When the code runs in a particular sequence of instructions given in the program.
//  - Each instruction waits for the previous instruction to complete its execution. 
//  - Example :


//            A S Y N C H R O N O U S  Programming -
//  - Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes delay in the UI.
//  - Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

console.log("one");
console.log("two");

setTimeout(() => {
    console.log("Hey my nigga.");
}, 4000);                         // The function "hello" will be executed after 4secs.

console.log("three");
console.log("four");