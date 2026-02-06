let l=[10,20,30]
    l.push(99)//add element to the end
    l.push(98,77,55)//multiple element add
    console.log(l);

    l.pop()//remove last element
    console.log(l);
    console.log(l.pop());//return what delete

    l.shift()// remove first element
    console.log(l);
    console.log(l.shift())//return what delete

    l.unshift(25)//add element to the beginning
    console.log(l);
    l.unshift(30,88)
    console.log(l);
    
    //Adds,removes or replaces elements at a specified index

    //l.splice(1,2)//1-index , 2-count 2 entry remove
    console.log(l);

     //l.splice(1,2,77,58,69)//1-index , 2-count 2 entry add 77,58
    console.log(l);

    l.splice(2,0,77,58,69)//1-index , 2-count 2 entry add 77,58
    console.log(l);

    //sort--By default, JavaScript sort() sorts elements as strings.
    //sort() converts numbers into strings
//👉 Then sorts them alphabetically (lexicographically)
    let w=[10,55,2,69,8,75,23,14]
    w.sort()
    console.log(w);
    
    w.sort((a,b)=>a-b);//ascending order
    console.log(w);
    
    w.sort((a, b) => b - a);//Descending Order
    console.log(w);

    w.reverse()
    console.log(w);
    
    //w.fill(5)
    console.log(w);
    w.fill(5,0,3) // 0 start point and 3 stop point point
    console.log(w);
    
    
    



















// //Sort

//     let w1 = [10, 55, 2, 69, 8, 75, 23, 14];

// /*
// By default, JavaScript sort() converts numbers to strings
// and sorts them alphabetically (lexicographically).

// So the output will not be numerically sorted.

// Example Output:
// [10, 14, 2, 23, 55, 69, 75, 8]
// */

// w1.sort();

// console.log(w1);

//  w1.sort((a, b) => a - b);

// console.log(w1);

// /*
// Output:
// [2, 8, 10, 14, 23, 55, 69, 75]
// */
   