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
var arr = [];

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

var newArr = new Array(1,2,3,4);

console.log(newArr.add());
// console.log(arr1.constructor);