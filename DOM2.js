//           Fetching and Altering Attributes

let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");   // to get the attribute value
console.log(id);

let newId = div.setAttribute("id","divpreet");   // to change the attribute value
console.log(newId);

let para  = document.querySelector("p");
console.log(para.setAttribute("class", "newpara"));

div.style.backgroundColor = "red";
div.style.backgroundColor = "violet";
div.style.flexDirection = "column";

div.style.fontSize = "5rem";
// div.style.visibility = "hidden";



//           Creating and Inserting new tags/elements.

let newButton  = document.createElement("button");
newButton.innerText = "Click Here!";

div.append(newButton);
let but = document.querySelector("button");
but.style.width =  "100px";

let newList = document.createElement("ol"); 
div.prepend(newList);

let list  = document.querySelector("ol");
list.append("li");
div.after();
div.before();