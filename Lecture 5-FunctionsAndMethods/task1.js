// Count Vowels in a String

let vowelsLetters="aeiouAEIOU"
let checkVowelsCount=(str)=>{
  let count=0
  for(let v of str){
    if(vowelsLetters.includes(v)){
      count++
    }
  }
  return count
}
console.log(checkVowelsCount("vaishnaviii"));

