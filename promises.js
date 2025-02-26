//                                P R O M I S E

//  It is an object in JavaScript which have three states:
//    1. Pending State (default state) - the promise-result is undefined. 
//    2. Fulfilled (resolved) State - the promise-result is a value.       resolve(result)
//    3. Rejected State - the promise-result is an error object.           reject(error)

//  Syntax: let promise = new Promise((resolve,reject) => {...})
//    - where resolve and reject are callbacks(functions) provided by JS.



// A practical example of how promises are used in programming.
function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataID);
            resolve("Success !!");
            if (getNextData) {
                getNextData();
            }
        }, 4000);
    });
}


// Promise Chaining
console.log("Fetching Data 1 ....");
getData(123).then((res) => {
    console.log("Fetching Data 2 ....");
    return getData(456);
}).then((res) => {
    console.log("Fetching Data 3 ....");
    return getData(789);
}).then((res)  => {
    console.log("Fetching Data 4 ....");
    return getData(1011);
}).then((res) => {
    console.log(res);
});
// OR
// getData(123).then((res) => {
//     console.log(res);
//     getData(456).then((res) => {
//         console.log(res);
//     });
// });



// ".then()" and ".catch()" methods
function asynFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1.");
            resolve("!! success !!");
        }, 4000);
    });
}
function asynFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2.");
            resolve("!! success !!");
        }, 4000);
    });
}
// Promise Chain
console.log("Fetching data 1....");
let p1 = asynFunc1();
p1.then((res) => {
    console.log("Fetching data 2....");
    let p2 = asynFunc2();
    p2.then((res) => {});
});