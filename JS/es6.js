var person ={
    Name :"vallab",
    Age :24,
    Gender : "male",
}


// object destructuring

let {Name:myName,Age} = person;

console.log(myName);

console.log(Age);

var book = 'you dont know js';

let b ={
    name:'hello',
    book,

    description(){
        console.log('hello');
    }
}

console.log(b);

// array destructuring

let array = [100,200,300,400];

// let  firstEle= arr[0];

let [firstEle,,thirdEle] = array;

console.log(firstEle);

console.log(thirdEle);

// spread and REST operator

let max =Math.max(...array); //spread operator has three dots.

console.log(max);

function sum(...n){   //it converts to array list
    console.log(n);
}
sum(100,200,300);