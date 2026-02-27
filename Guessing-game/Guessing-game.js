const max =prompt("Enter the max number");

const random = Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

while (true) {
  if (guess=="quit") {
    document.write("User Quit")
    break
  }

  if (guess==random) {
    document.write("You are right!!! congrats!! random number was: ", random)
    break
  }else if(guess<random){
    guess=prompt("hint: Your guess was too small.please try again")
  }else {
    guess=prompt("hint: Your guess was too large.please try again")
  }
  
}