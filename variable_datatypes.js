console.log("My name is Harjot Singh.");

let age = 20;                  // number
let name = "Harjot Singh";     // string
    
let x = null;                  // khaali value hai
let y = undefined;             // pata nhi kya value hai  isme
let isFollow = true;           // boolean

let price = 499.99; 
price = "4 sau ninyaanve rupaye dashamlag ninyaanve";
console.log(typeof price);
console.log(price);

const pi = 3.14;
// pi = 3;                     // error
console.log(pi);

let a;
console.log(a);                // 'a' will be undefined

//  Block-1
{
    let a = 5;
    console.log(a);
}

//  Block-2
{
    let a = 10;
    console.log(a);
}


//       OBJECTS
// syntax of object declaration:
// let/const objName = {
//      key1 : value1 ,
//      key2 : value2 
// }
const Student = {
    fullName : "Nishit Pandey",
    age : 19,
    cgpa : 8.14,
    isPass : true
};
console.log(Student);
console.log(Student["fullName"]);
console.log(Student.cgpa);
// console.log(Student[age])   // error

console.log("Before :",Student.age);
Student.age += 2 ;
console.log("After :",Student.age);

console.log("Practice Question :\n");

const instaProfile = {
    usename : "@igharjot" ,
    followers : 569000 ,
    following : 4 ,
    posts : 195 ,
};
console.log(instaProfile);