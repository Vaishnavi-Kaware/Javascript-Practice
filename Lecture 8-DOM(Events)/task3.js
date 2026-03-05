let inp=document.querySelector("input")
let para=document.querySelector("p")

inp.addEventListener("input",function(){
  //console.log(inp.value);
  para.innerText=inp.value
  
})