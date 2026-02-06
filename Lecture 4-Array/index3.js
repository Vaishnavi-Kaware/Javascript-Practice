let l=["red","green","blue","yellow","grey"]
//l.slice(1,1) //no data start 1 and stop also 1
console.log(l.join("--"));//array to string convert use separater

let myString=l.toString()//convert array into string but not any separate 
console.log(myString);

   
let newarray=l.slice(1,2)
console.log(newarray);

console.log(l);



let l2=[69,85,84]
let l3=[12,56,21]
let l4=[55,1]
let concatArray=l2.concat(l3)
console.log(concatArray)
let concatArray2=l3.concat(l2,l4);
console.log(concatArray2);

let n=[10,55]
console.log(n.includes(95));

console.log(n.indexOf(55));//return index num
console.log(n.indexOf(515));


