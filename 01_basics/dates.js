// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// // my created date 

// let mycreatedDste = new Date(2024,0,23)
// // console.log(mycreatedDste.toDateString());

// //timestamps

// let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);
newDate.toLocaleString("default",{
    weekday: "long"
})
