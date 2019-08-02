let todate = new Date();

console.log(todate);

// let tm =Date.now();

// console.log(tm);
// console.log(new Date(1534474190));


let cur =  Date.now();

let pre = new Date(cur);
console.log(pre);

let a = new Date(0);

console.log(a);
let now = new Date();

let month = now.getMonth();

console.log(month);

let  date = now.getDate();
console.log(date);

let day = now.getDay();

console.log(day);


let full = now.getFullYear();

console.log(full);


let  hours = now.getHours();

console.log(hours);


let min = now.getMinutes();

console.log(min);

let  newDat = now.setDate(4);

console.log(new Date(newDat));


let c = Date.now();

for(i=0;i<10000000;i++){
    
}
console.log(Date.now());

