// function literals and calling the function after the function declaration.If we call it before declaration it will throw an error its is not a function. 
// defination:a function literal is an expression that defines unnamed function.
var mul = function (){

    console.log("this is vallab")    

}
 mul();

//  arithmetic

var div = function(c,d){
    return c/d;

    }
console.log(div(10,2))

// two types of function literals
// 1.self-executing literal,and these literals are executed only once.
(function(){
    console.log("anonymous function literal");
})();
