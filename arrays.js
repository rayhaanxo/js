// const myArr = [0, 1, 2, 3, 4, 5]

// const arr2= new Array(1,2,3,4,5)


// console.log(arr[0]);

//arrays methods
// arr2.push(6)
// console.log(arr2.includes(9));

//slice splice
// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


const marvel  = ["thor","ip","sp","mp"];
const dc=[ "sp","hp","gp"];
// const all = marvel.concat(dc);
const all =[...dc,...marvel]

// console.log(all)
console.log(Array.isArray("rayhaanxo"));
console.log(Array.from("rayhaanxo"));
console.log(Array.from({name:"rayhaanxo"})); //interesting for interview

let score = 100
let score1 =200
let score3=300

console.log(Array.of(score,score1,score3));