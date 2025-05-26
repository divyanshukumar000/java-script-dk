// Dates//
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2025,0,12)
console.log(myCreatedDate.toDateString());
let myCreatedDates = new Date(2025,0,12,7,34)
console.log(myCreatedDates.toLocaleString());
console.log(myCreatedDate.getTime());



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getTime());


newDate.toLocaleString('default', {
    weekday:"long"
})




