displayData() //Hoisting --> is JavaScript’s behavior where variable and function declarations are moved to the top of their scope before the code runs.

function displayData(){
  document.write("Welcome To JS Function")
}

displayData()

function showName(){
  alert("Call Fun. on event")
}

function addData(){
  console.log(10+30);
  
}
addData()

function addData2(a,b=1){
    console.log(a+b);
    
}
addData2(5)
addData2(5,10)


function greetUser(userName="Vaishnavi"){ //Default Argument 
  console.log(`welcome to ${userName}`); //template literals
  
  console.log("Hello "+ userName);
  
}
greetUser()

function sumData(...allParams){//rest operator
  console.log(allParams);
  
}
sumData(10,20,30,50,60)