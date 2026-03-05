let form = document.querySelector("form")

form.addEventListener("submit",function(event){
  event.preventDefault();
  console.log("Form submited");
  
  //Extracting form Data
//   let user=document.querySelector("#user")
//  // console.log(inp.value);

//   let pass=document.querySelector("#pass")
//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value}, your password is set to ${pass.value}`)
  

console.dir(form)
console.log(form.elements);
console.log(form.elements[1]);

  let user=this.elements[0] //form.elements[0]
 // console.log(inp.value);

  let pass=this.elements[1]
  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your password is set to ${pass.value}`)


})