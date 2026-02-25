console.log("hello");

// Function with return type

function addData(a,b){
  return a+b;
}
console.log(addData(5,6));
 


function taxCal(price){
  console.log(price*.10);
  
return price*.10;
}
let productPrice=50000
let result=taxCal(productPrice)+productPrice
console.log(result);

// Anonymous Function --> An anonymous function is a function without a name, usually used as a value or callback.

let display=function(){
  console.log("wel");
  
}
display()

//Callback function--> call another function argument

function addData3(num1,num2){
  return num1+num2
}

function minData(num1,num2)
{
  return num1-num2
}

function calculate(num1,num2,callback){
  console.log(num1);
  console.log(num2);
  console.log(callback(num1,num2));
  
  
  
}
calculate(10,20,addData3)
calculate(80,20,minData)

// Arrow function

let addData4=()=>{
  console.log("Welcome");
  
}
addData4()
//print(addData4())--print the page 

let addData5=(n,m)=>n+m //implicit return
console.log(addData5(80,120));

let square=(x)=>x*x
console.log(square(5));
