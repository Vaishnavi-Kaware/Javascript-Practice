// let l=[1,2,3,4]

// for(let v of l){
//   l.pop()
// }
// console.log(l);


let l=[1,2,3,4]

for(let v of l){
  l[3]=v
}
console.log(l);

//l[3]=1 [1,2,3,1] round 1
//l[3]=2 [1,2,3,2] round 2
//l[3]=3 [1,2,3,3] round 3
//l[3]=3 [1,2,3,3] round 4