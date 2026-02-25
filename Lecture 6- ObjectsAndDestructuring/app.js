//Object

let user={
  userEmail:"vais@gmail.com",
  userPhone:801059632,
  userStatus:true,
  userAddress:'pune',
  1:50
}

console.log(user);
console.log(user.userEmail); //dot notation
console.log(user['userAddress']); //bracket
// console.log(user.1);//error
console.log(user[1]); //use bracket only


//🔹 Rule
// In JavaScript:

// 👉 If key does not exist → it will create a new key
// 👉 If key already exists → it will update the value

// This works for both:
// Dot notation
// Bracket notation

//Add  key
//user['age']
user.age=32
console.log(user);

//Update key
user.age=56
console.log(user);
user['userAddress']='punee'
console.log(user);

//Destructuring -->Destructuring means extracting values from an object into variables easily.
let userName="Vaishnavi"
let user2={
  userEmail:"vais@gmail.com",
  userPhone:801059632,
  userStatus:true,
  userAddress:'pune',
  userName,
  1:50
  
}

console.log(user2);


//let {userEmail,userAddress}=user2;
//console.log(userAddress);
let {userEmail:email}=user2; //rename key
console.log(email);
let {userEmail,...otherDetails}=user2; //rest operator
console.log(email,otherDetails);

 // Nested Destructuring

 let user3={
  userEmail:"vais@gmail.com",
  userPhone:801059632,
  userStatus:true,
  userAddress:{
    cityName:"pune",
    state:"Raj",
    country:"India"
  },
  userName,
  1:50
  
}

let {userAddress:{cityName,state}}=user3
console.log(cityName);
console.log(state);

// Array Destructuring

let colors=["red","green","blue"]
let[firstColor,ws]=colors
console.log(firstColor,ws);

//Skipping elements
let l=[10,20,30,40,50]
let[, ,a]=l
console.log(a);

//Array Spread

let [b,...rest]=l
console.log(b,rest);
