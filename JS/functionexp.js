var result = 0;
let sum =function(){
    console.log(arguments.length);
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
        result = result+arguments[i];
        
    }
    return result;
}
var result =sum(2,3,4,5,13,24,30,50,56,60,70,85);
document.write(result);
// 
// hoisting
let value = function(){
    console.log("hi");
}
value();

