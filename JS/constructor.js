function movie(name,type,rating){
    this.name=name;
    this.type=type;
    this.rating=rating;

}
let  m = new movie("phokron",'bio',7.5);
let v = new movie('ratsason','fiction',8.0);
console.log(m);
// function properties
console.log(m.constructor);
console.log(movie.prototype);
console.log(movie.length);

movie.prototype.period = '2hrs';
console.log(m.period);
console.log(typeof movie.prototype);
console.log(v);
console.log(v.period);
console.log(v.constructor);
console.log(m.hasOwnProperty('name'));
console.log(m.constructor.prototype.hasOwnProperty('period'));
var str =  m.period.toString();
console.log(typeof str);

console.log(Object.hasOwnProperty('toString'));
console.log(Object.constructor.prototype.hasOwnProperty('toString'));

var obj = {};

var obj2 = new Object();

console.log(obj2.constructor);

console.log(obj2.constructor.prototype);


// Array is constructor  function
/*var arr = [];

var arr2 = new Array();

console.log(arr2);


arr2.push(1);

console.log(arr2);

console.log(typeof arr2);


Array.prototype.push = function(){
    return 'hello'
}

Array.prototype.add = function(){
    console.log('our add',this);
    var res = 0;
    for(var i=0;i<this.length;i++){
        res += this[i];
    }
    return res;
}

console.log(arr2.push());

console.log(arr2);

console.log(arr.add());

// Array object print the values 

var newArr = new Array(1,2,3,4);

console.log(newArr.add());

// console.log(arr1.constructor);*/

// when give single element it will return the empty and length.

/*var p = new Array(5);

console.log(p);*/


// push
var array = [1,2,3,4,5,6];

console.log(array);
 
array.push(7);

console.log(array);

// shift
array.shift();
console.log(array);

// slice

console.log(array);

var sliced = array.slice(2,3);

console.log(sliced);

// splice


array.splice(1,3,'a','b','c');

console.log(array);

// sort



// join

var names =['v','a','l','l','a','b'];

console.log(names.join(''));