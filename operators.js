console.log("Hello World\n");

let a = 20;
let b = "20";
console.log("typeof a =", typeof a);
console.log("typeof b =", typeof b);
console.log("a =",a);
console.log("b =",b);
console.log("a == b is", a == b);      // JS will convert string->number , then compare a and b
console.log("a === b is", a === b);    // strict



//    TERNARY OPERATOR
let age = 20;
let result = age >= 18 ? "adult" : "not-adult";
console.log(result);


let num = prompt("Enter a number : ");
console.log(typeof(num));

if(num % 5 === 0) {
    console.log(num , "is a multiple of 5.");
} else {
    console.log(num , "is not a multiple of 5.");
}



//   CONDITIONAL STATEMENTS
let x = 8;
if( x % 2 == 0) {
    console.log("x is even number.");
} else {
    console.log("x is odd number.");
}

let mode = "light";
if ( mode == "dark") {
    console.log("Dark-Mode.");
} else if ( mode == "light") {
    console.log("Light-Mode.");
} else {
    console.log("Classic-Mode");
}


//       GRADES

let marks = 66;
if (marks>=90 && marks<=100) {
    console.log("Marks =",marks);
    console.log("A Grade.");
} else if (marks>=70 && marks<=89) {
    console.log("Marks =",marks);
    console.log("B Grade.");
} else if (marks>=60 && marks<=69) {
    console.log("Marks =",marks);
    console.log("C Grade.");
} else if (marks>=50 && marks<=59) {
    console.log("Marks =",marks);
    console.log("D Grade.");
} else if (marks>=0 && marks<=49) {
    console.log("Marks =",marks);
    console.log("F Grade.");
}