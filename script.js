/*       Notes For DOM Challenges I
1. Question 5 changes the labels so it has to be turned off 
to see #10, #12? 

2. #7 undo's #6 so comment them out one at a time to see them
in action

3. #8, #9, #10 and #12 all deal with the same attribute, comment them
out one at a time to see them in action.

*/
//test
console.log("Hi");

//Question 1
//Select the section with an id of container without using querySelector.
console.log("Question 1");
let a = document.getElementById("container");
console.log(a);


//Question 2
//Select the section with an id of container using querySelector.
console.log("Question 2");
let b = document.querySelector("#container");
console.log(b);


//Question 3
//Select all of the list items with a class of "second".
console.log("Question 3");
let c = document.getElementsByClassName("second");
console.log(c); 

//Question 4
//Select a list item with a class of third, but only the 
//list item inside of the ol tag.
console.log("Question 4");
let d = document.querySelector("ol .third");
console.log(d);


//Question 5
//Give the section with an id of container the text "Hello!".
console.log("Question 5");
let e //= document.querySelector("#container").innerHTML ="Hello!";
console.log(e);


//Question 6
//Add the class main to the div with a class of footer.
console.log("Question 6");
let f = document.querySelector("div.footer");
f.classList.add("main");
console.log(f);


//Question 7
//Remove the class main on the div with a class of footer.
console.log("Question 7");
let g = document.querySelector("div.footer");
g.classList.remove("main");
console.log(g);


//Question 8
//Create a new li element.
console.log("Question 8");
let li = document.createElement("li");
console.log(li);


//Question 9
//Give the li the text "four".
console.log("Question 9");
li.innerText = "four";
console.log(li);


//Question 10
//Append the li to the ul element.
console.log("Question 10");
let ul = document.querySelector("ul");
ul.append(li);
console.log(ul);


//Question 12?
//Loop over all of the lis inside the ol tag and give them a 
//background color of "green".
console.log("Question 12?");
const h = document.getElementsByTagName("li");
for(let i = 0; i<h.length; i++)
h[i].style.background = "Green";
console.log(h);


//Question 13?
// Remove the div with a class of footer.
console.log("Question 13?");
let l = document.querySelector("div.footer");
l.classList.remove("footer");
console.log(l);