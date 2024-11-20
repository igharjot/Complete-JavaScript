// Que- Why is it used ?

// Ans- So that if there is any error in the code, the other program should not get effected/stopped due to that single error only.

let a = 50;
let b = 100;
console.log(a + b);
console.log(a - b);
try {
    console.log(a + c);
} catch (error) {         // the error is caught by this error object.
    console.log(error);   // the error is PRINTED.
}
console.log(a * b);
console.log(a / b);
