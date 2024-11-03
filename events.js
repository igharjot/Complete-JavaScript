//                          E V E N T S
//   1. Mouse events (click. double click, ,etc.)
//   2. Keyboard events (keypress, keyup, keydown, etc.)
//   3. Form events (submit, etc.)
//   4. Print events and many more user interactions...

let b1 = document.getElementById("btn1");
b1.onclick = () => {
    console.log("button 1 was clicked");
    alert("Single Clicked.");
    let a = 55;
    console.log(a);
}

// Priority : Inline event-handling < JS event-handling.

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("You are inside the div.");
    alert("Hovering on this div is not allowed.");
}



//      E v e n t   O b j e c t 
// node.event = (e) => {
//      //handlle here
// }
// ( e.target, e.type, e.clientX, e.clientY )

let b2 = document.getElementById("btn2");
b2.ondblclick = (evt) => {
    console.log("You just double clicked on button-2.");
    alert("Double Clicked.");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log("X =",evt.clientX,"\nY =", evt.clientY);
}



//     Event Listeners
let b3 = document.querySelector("#btn3");

b3.addEventListener("click", () => {
    console.log("Submit Button was clicked : Handler-1.")
});
b3.addEventListener("click", () => {
    console.log("Submit Button was clicked : Handler-2.")
});
b3.addEventListener("click", () => {
    console.log("Submit Button was clicked : Handler-3.")
});

let handler4 = () => {
    console.log("Submit Button was clicked : Handler-4.");
}
b3.addEventListener("click", handler4);

b3.removeEventListener("click", handler4);   // handler4 will not be printed in console.




//                           Q U E S T I O N 
// Que- Create a toggle button that changes the screen to dark-mode when clicked and ligh-mode when clicked again.

let modeButton = document.getElementById("mode");
let currMode = "light";
let body = document.querySelector("body");
modeButton.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        // body.style.backgroundColor = "rgb(53, 50, 49)";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else if (currMode ==="dark") {
        currMode = "light";
        // body.style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }   
});