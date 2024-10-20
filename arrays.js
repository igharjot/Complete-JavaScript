
//     A R R A Y S  ( mutable ) 

let s1 = 96;
let s2 = 75;
let s3 = 48;

let marks1 = {     // Key-Value pairs
    stu1 : 96,
    stu2 : 75,
    stu3 : 48
};

let marks2 = [96, 75, 48];     // Array declaration
console.log(marks2);
console.log(marks2.length);

let heros = ["shaktimaan" , "chota bheem" , "ben10" , "spiderman" , "megatron"];
console.log(heros);
console.log(typeof heros);         // object

for(let i = 0 ; i < heros.length ; i++) {
    console.log(i+1, heros[i]);
}

// for of 
for(let single of heros) {
    console.log(single);
}
console.log("\n");
let cities = ["Delhi", "Mumbai", "Benguluru", "Ludhiana", "Amritsar"]

// for in
for(let city in cities) {
    console.log(cities[city]);
}


let numbers = [10,20,30,40,50,80,90,100]
let sum = 0;
for(let x of numbers) {
    sum += x;
}
let avg = sum / numbers.length;
console.log(`Average of the numbers = ${avg}`);

//  push(110)
numbers.push(110);
console.log(numbers);

// pop()
numbers.pop();
console.log(numbers);


// toString()
console.log(numbers.toString());

// concat() , slice() same as string.

// splice(start, del, new)
numbers.splice(2, 1, 65);
console.log(numbers);

numbers.splice(3, 3, 99);
console.log(numbers);