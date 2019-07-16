function outer(){
    console.log("body of outer function")
    function inner(){
        console.log("bopdy of inner fun")
    }

     return inner();
}
 outer();
// inn()


// example

function fullName(fn1,fn2){
    var first ="vallab";
    var last = "devara";
    return fn1(first)+''+fn2(last)
}
function firstName(n){
    return n;
}
function lastName(l){
    return l;
}
var fn = fullName(firstName,lastName);
console.log(fn);

