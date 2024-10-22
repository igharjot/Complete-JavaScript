
//                   F U N C T I O N S

function square(x)            // parameter
{
    console.log(x);
    return x*x;
}
val = square(89);             // Argument
console.log(val);


// Arrow Functions
const arrowMultiply = (a, b) => {
    return a*b;
};
console.log(arrowMultiply(6,6));

const printHello = () => {
    console.log("Hello");
}


//   Question
function strVowel(str) {
    let vow = 0;
    for (let i of str) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' ||i === 'U') {
            vow += 1; 
        }   
    }
    return vow;
}
let str =  "My name is Sheela, Sheela ki jawani.";
console.log(`Number of vowels in the string : '${str}' = ${strVowel(str)}`);



//                  M E T H O D S

// Functions bound with a data structure are called methods.
// Example- toUpperCase() is a funtion which is bounded with string DS, therefore acting as method.

// 'forEach' Loop in arrays.
// Syntax : arr.forEach(callBackFunction);

let arr = [10,20,30,40,50,60];

arr.forEach((val, idx, arr) => {     // 3 parameters
    console.log(val, idx, arr);
});

// Higher Order Functions/Methods : These are the funtions/methods that either take another funtion as a parameter or return another funtion.
// forEach() is a heigher order funtion.

let sqArr = [1,2,3,4,5];
sqArr.forEach((element) => {
    console.log(element*element); 
});



//         A R R A Y    M E T H O D S 

// arr.map() is used to make a new array using an existing array.
let newArr = arr.map((data) => {
    return 2*data;
});
console.log(newArr);

// arr.filter() - conditional filtered array.
let anotherOne = arr.filter((info) => {
    return info % 4 == 0;
});


// arr.reduce() - used when there are so many inputs and only one output.
// Syntax : const var = arr.reduce(accumulator, currentValue) => {  }.
const output = arr.reduce((prev, current) => {
    return prev > current ? prev : current;  // greatest number in the array.
});

               // Factorial program
let  n = prompt("enter the value of n : ");
console.log("n = ", n);
let list = [];
for(let i=0 ; i<n ; i++)  {
    list[i] = i+1;
}
const factorial = list.reduce((prev , curr) => {
    return prev*curr;
});
