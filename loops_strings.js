// let i;
// for(i = 1 ; i <= 100 ; i++) {
//     if(i%2 === 0) {
//         console.log(i);
//     }
// }



// let gameNum = prompt("Guess a number between 0 and 10.");     // input
// let ans = 8;
// while(gameNum!=ans) {
//     gameNum = prompt("Wrong Answer, Guess again between 0 and 10.");
// }
// console.log("Correct Answer.");

//                 **** STRINGS ****   ( immutable )

let name = "Harjot Singh";
l = name.length;
console.log("Length of string 'name' =", l);
console.log(name[8]);


//               TEMPLATE LITERALS
let specialString = `This is a fookin special string called Template Literal.`;   // string inside backticks
console.log(typeof specialString);


let stationary = {
    item1 : "pen",
    price1 : 50,
    item2 : "register",
    price2 : 120,
};

let output = `The cost of ${stationary.item1} and ${stationary.item2} is ${stationary.price1} and ${stationary.price2} respectively.`;         // Use of backticks string.
console.log(output);

console.log("The cost of" , stationary.item1 , "and" , stationary.item2 , "is" , stationary.price1, "and" , stationary.price2 , "respectively.");       // diffult to code / write.

console.log(`The sum of first 3 integers is = ${1 + 2 + 3}`);       // Any expression can be written inside ${exp}.

str = "Harjot\tSingh"
console.log(str);
console.log(str.length);       // "\t" and "\n" acquires




//  String BUlit-in functions

console.log("\nUsing STRING built-in functions...\n\n")

let egStr = "Welcome to Peaky fookin Blinders."
let UPeggStr = egStr.toUpperCase();
let LOWegStr = UPeggStr.toLowerCase();

console.log(egStr,"\n",UPeggStr,"\t\t(using toUpperCase())\n",LOWegStr,"\t\t(using toLowerCase())\n");

let head = " This    is a    sample        example  .";
let h1  = head.trim();
console.log(h1);

console.log(head.concat(egStr));  // OR console.log(head + egStr);

console.log(head.slice(2,9));      // excluding the end-index value.

console.log(head.replace( " " , "Y"));       // Only one time replacement.
console.log(head.replaceAll(" ","X"));       // Replaces all values.




//     PRACTICE QUESTION

let fullName  = prompt("Enter your full name : ");
let len = fullName.length;
let lower = fullName.toLowerCase();
let final = lower.replaceAll(" ","");
let username = "@" + final + len ;

console.log("Your username is :" , username);