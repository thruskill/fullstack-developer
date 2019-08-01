// setTimeout(cb, time(in ms));
console.log("program starts");

function greet(){

    alert("hello,guru");
}

// setTimeout(function(){
//     // alert("hi");
//     console.log("settimeout cb");
//     // setTimeout(greet,2000)
// },2000)



let n = 1 ;
let sti =setInterval (function(){
    console.log(new Date())
    if(n==6){
        clearInterval(sti); //it will stop after 6 times displaying the function
    }
    n++;
},2000)

console.log("returned from setInterval",sti);

console.log("program ends.")