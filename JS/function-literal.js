// function literal cannot be called using function name
var fun = function(){
    console.log("function literal");
}
fun();


var add = function(a,b){
    return a+b;
}
console.log(add(2,3));


// using cases of anonymous function

// 1.self-executing function

(function(){
    console.log("anonymous function literal");
})();


// using parameters
(function(a,b){
    console.log(a);
    console.log(b);
})(2,3);



// 2.callbacks


// fat-arrow function

var add = function(a,b){
    return a+b;
}
/*var addition = (a,b) =>{
    return a+b;
}*/

var addition = (a,b) => a+b;
console.log(addition(2,3));


var fn = () =>console.log("hello");

fn();


// higher-order-function

var a = function outer(){
    var outVar = 20;
  var b =  function inner(){
        console.log("inner function");
        console.log(outVar)
    }
    b();

}
a();



function adds (a,b){

    var sum = a+b;

    function square() {

        return sum*sum;

    }

    

    // return square(sum);
     return square;
}

// var sq = add(5,5);

// var res = sq()

// var s = sq(10);

// console.log(s)

// console.log(res);

var sqr =  adds(3,4);

 var r = sqr();

console.log(r);