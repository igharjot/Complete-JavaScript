//                          D O M ( Document Object Model )

// Method of accessing HTMl code in JavaScript. 
// It is a tree-like structure where all the  HTML code/ tags are accessible. Also we can print it in JS.
// It is used when we want to makes changes in the HTML code dynamically or during run-time.

// window is a pre-defined object created by the browser. 
  
console.dir(window);      // console.dir() is used to print objects.
console.log(window);

console.dir(document);
console.log(document);

console.dir(document.body);
console.log(document.body);

console.dir(document.head);
console.log(document.head);



//                          D O M  Manipulation

//    Accessing elements/ tags from HTML.
let heading1 = document.getElementById("header");
console.dir(heading1);

let heading2 = document.getElementsByClassName("heading");
console.dir(heading2);    // HTML Collection - Array-type structure containing data

let heading3 = document.getElementsByTagName("p");
console.dir(heading3);    // HTML Collection

let firstElement = document.querySelector("p");  
console.dir(firstElement);     // 1st matched element is returned.

let allElements = document.querySelectorAll("p");  
console.dir(allElements);      // all elements are returned in a NodeList.


//    Properties.
console.dir(heading1.tagName);    // Returns tag-name.

console.dir(document.body.firstChild);
console.dir(document.body.lastChild);
console.dir(document.body.children);

// DOM Tree contains :
// 1.Text Nodes
// 2.Comment Nodes
// 3.Element Nodes  (***)

let div = document.querySelector("div");
console.dir(div);

let head = document.querySelector(".heading");
console.dir(head);
console.log(head);

let tagname = head.tagName;        // returns tag-name for element nodes. 
let text = head.innerText;         // returns the text content of te element and all its children.
let html = head.innerHTML;         // returns the HTML content in the element.
let content = head.textContent;    // returns textual content even for hidden elements.

console.dir(tagname);
console.dir(text);
console.dir(html);
console.dir(content);

let ele = document.querySelector("h2");
console.dir(ele);
console.dir(ele.innerText);
ele.innerText  = ele.innerText + " Mai hu G-Yaan"; 
console.dir(ele.innerText);