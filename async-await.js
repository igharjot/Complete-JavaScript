// CALLBACK HELL << PROMISES << ASYNC-AWAIT

// "async" and "await" are 2 keywords in JS which makes the syntax of promises and callback hell easier/simpler.

// "async" funtion always returns a promise automatically.
// Syntax: asyn function funcName() {...}

// "await" pauses the execution of its surrounding 'async function' until the promise is settled.
// "await" can only be used inside an async function only.
// Syntax: await function funtcName() {...}

// Example:
function Api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve("200");              // Success is written as 200
        },2000);                    
    });
}
async function getWeatherData() {
    await Api();  // 1st call
    await Api();  // 2nd call
}

// Comparing Async-Await, Promise and Callback Hell codes
function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", dataID);
            resolve("Success !!");
            if (getNextData) {
                getNextData();
            }
        }, 4000);
    });
}

// Async-Await
async function getAllData() {
    console.log("Fetching data 1 ....");
    await getData("ROll No-123");
    console.log("Fetching data 2 ....");
    await getData("ROll No-124");
    console.log("Fetching data 3 ....");
    await getData("ROll No-142");
    console.log("Fetching data 4 ....");
    await getData("ROll No-146");
    console.log("Fetching data 5 ....");
    await getData("ROll No-154");
}

// Promise
console.log("Fetching Data 1 ....");
getData("ROll No-123").then((res) => {
    console.log("Fetching Data 2 ....");
    return getData("ROll No-124");
}).then((res) => {
    console.log("Fetching Data 3 ....");
    return getData("ROll No-142");
}).then((res)  => {
    console.log("Fetching Data 4 ....");
    return getData("ROll No-146");
}).then((res)  => {
    console.log("Fetching Data 5 ....");
    return getData("ROll No-154");
}).then((res) => {
    console.log(res);
});

// Callback Hell
console.log("Fetching Data 1 ....");
getData(1, () => {
    console.log("Fetching Data 2 ....");
    getData(2 , () => {
        console.log("Fetching Data 3 ....");
        getData(3, () => {
            console.log("Fetching Data 4 ....");
            getData(4, () => {
                console.log("Fetching Data 5 ....");
                getData(5);
            });
        });
    });    
});

// IIFE- Immediately Invoked Function Expression
// It is a function that is called immediately as sooon as it is defined.
(async function getAllData() {
    console.log("Fetching data 1 ....");
    await getData("ROll No-123");
    console.log("Fetching data 2 ....");
    await getData("ROll No-124");
    console.log("Fetching data 3 ....");
    await getData("ROll No-142");
    console.log("Fetching data 4 ....");
    await getData("ROll No-146");
    console.log("Fetching data 5 ....");
    await getData("ROll No-154");

})();
