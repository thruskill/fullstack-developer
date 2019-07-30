let today = new Date();
console.log(today);
let tm = Date.now();
console.log(tm);

let td = new Date(tm);

console.log(td);

let cal = new Date(0);

console.log(cal);

let date = today.getDate();

console.log(date);

let month = today.getMonth();

console.log(month);

let year = today.getFullYear();

console.log(year);

let t = today.getTime();

console.log(t);

// momentjs  is library for timeand date formats

let h = today.getHours();

console.log(h);

let min = today.getMinutes();

console.log(min);

let newDat= today.setDate(4);

console.log(new Date(newDat));


let c = Date.now();

for(i = 0;i<10000000;i++){

}
console.log(Date.now()-c);

let userDate = '10-07-2019';

let uD = new Date(userDate);


console.log(uD);