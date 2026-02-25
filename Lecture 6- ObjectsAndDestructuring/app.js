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

