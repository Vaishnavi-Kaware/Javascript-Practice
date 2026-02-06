// let num1=Number(prompt("Enter the value:--"))
// if(num1%2==0){
//  document.write(num1," Even Num.");
  
// }else{
//   document.write(num1," Odd Num.");
  
// }

// let num2=Number(prompt("Enter a number-->"))

// if(num2==0){
//   console.log(`Your Number is ${num2}`);
  
// }else if(num2>0){
//   console.log("Positive");
  
// }else{
//   console.log("Negative");
  
// }

// let user=prompt("Enter your username:--")
// let password=prompt("Enter Your Password:--")
// if(user==="admin"){
//   if (password==="1234") {
//     console.log("Access Granted");
    
//   }else{
//     console.log("Wrong Password");
    
//   }
// }else{
//   console.log("Access Denied");
  
// }

let username=prompt("Enter username:")

if (username=="admin") {
  let password=prompt("Enter password:")
  if (password==1234) {
    console.log("access");
  } else {
    console.log("wrong password");
    
  }
  
} else {
  console.log("Wrong username");
  
}

let light="yellow"

switch (light) {
  case "yellow":
    console.log("ready");
    break;

  case "green":
    console.log("go");
    break;
      

  default:
    console.log("stop");
    
    break;
}