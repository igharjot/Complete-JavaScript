
function sum(a, b) {
    console.log("a + b =",a + b);
}
function calculator(a, b, sumCallBack) {
    sumCallBack(a,b);
}
calculator(10, 20, sum);

//                      CALLBACK HELL
// - It is an error which sometimes arrises in/during callback.
// - It is the nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
// - This style of programming becomes difficult to understand and manage.



//                    Callback Nesting

console.log("           Callback Nesting:");
function getData1(data1) {
    setTimeout(() => {
        console.log("Data :", data1);
    }, 2000);
}
getData1(50);
getData1(100);
getData1(200);

function getData2(data2, getNextData) {
    setTimeout(() => {
        console.log("Data :", data2);
        if (getNextData){
            getNextData();
        }
    }, 2000);
}

// Callback Hell (Pyramid of Doom)
// It is a problem in JavaScript which is solved by Promise(s).
setTimeout(() => {
    getData2(10 , () => {
        getData2(100, () => {
            getData2(1000);
        });
    });    
}, 2000);