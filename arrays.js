const myArr = [0, 1, 2, 3, 4, 5]

// const arr2= new Array(1,2,3,4,5)


// console.log(arr[0]);

//arrays methods
// arr2.push(6)
// console.log(arr2.includes(9));

//slice splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
