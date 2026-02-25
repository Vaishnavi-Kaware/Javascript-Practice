// Shallow Copy vs Deep Copy

let l=[1,2,3,4,5]
let m=l //deep
console.log(l);
console.log(m);

m.push(36)
console.log(l);
console.log(m);

let n=[...l] //shallow
console.log(l);
console.log(n);

n.push(346)
console.log(l);
console.log(n);