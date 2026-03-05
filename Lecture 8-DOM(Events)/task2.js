let inp = document.querySelector("input")

inp.addEventListener("keydown",function(event){
  console.log("code = ",event.code); //ArrowUp(U),  ArrowDown(D), ArrowLeft(L), ArrowRight(R),

  if (event.code=="ArrowUp" || event.code=="KeyU" ) {
    console.log("Character moves up");
    
  } else if(event.code=="ArrowDown" || event.code=="KeyD"){
    console.log("Character moves Down");
    
  }else if(event.code=="ArrowLeft" || event.code=="KeyL"){
    console.log("character moves left");
    
  }else if(event.code=="ArrowRight" || event.code=="KeyR"){
    console.log("character moves right");
    
  }else{
    console.log("Invaild key");
    
 }

  
})