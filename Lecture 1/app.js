document.write('-------')
document.write(10+90)
document.write("Vaishu")
document.write("<br>");

//JavaScript is called an interpreted language because its code is executed line-by-line by the browser at runtime, without needing to be compiled first.
// Browser alreday have Interpreter Setup
//No separate compilation step
//Browser reads and runs code directly
//Errors are shown immediately while running
//Example-->
document.write(60+90)//show on the browser without error
//document.write(welcome) // not show because error show in console not a browesr
// on console--> 
// on console-->No separate compilation step
document.write("<br>");
document.write(80000,"hi")//not show on browser no error but js is interpreter programming lang. above statement is in error that why below stamt not execute it stop and show error.
document.write("<br>");
document.write(`backtick is also for show string`)
document.write("<br>");

console.log(10+60)//to show output on console window. use for development pupose
console.log("Welcome",60+89)
//alert("HII")//ans show in pop

 let a=20, b=10.2, c=0
 console.log(b,typeof(b)) //to comment select line ctrl+?
console.log(true+5)//6 implicit data type conversion

// let num1=parseFloat(prompt("Enter Number"))//take user input string=20
// console.log(num1,typeof(num1)) //number=20 
// let num2=parseInt(prompt("Enter Number"))//take user input string=20
// console.log(num2,typeof(num2)) //number=20 //only take number not take decimal point
let num3=Number(prompt("Enter Number"))//take user input string=20
console.log(num3,typeof(num3)) //number=20 //use for both to convert explicit number,float,binary