// console.log(window);
// console.log(document.window);

//Target Element through id
//let headingElement=document.getElementById("heading");
// console.log(headingElement);

// let paraElement=document.getElementById("para1")//element target through id 
// console.log(paraElement);

// let titleElement=document.getElementById("title");
// console.log(titleElement);

//innerhtml and innertext

// console.log(headingElement.innerHTML);//Returns everything inside element including HTML tags
// console.log(headingElement.innerText);//Only text, Ignores hidden content

//Target Element through querySelector() method -class,id,tagNeame

let inputElement=document.querySelector("#num1");
console.log(inputElement);//id

let inputElement2=document.querySelector(".input");
console.log(inputElement2);//class

let inputElement4=document.querySelector("#name")
console.log(inputElement4);//id

let inputElement3=document.querySelector("input")
console.log(inputElement3);//tagName






