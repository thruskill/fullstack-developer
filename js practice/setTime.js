function greet(){
    alert('hello');

}


// setTimeout(function(){
//     // alert("hello");
//     setTimeout(greet,2000);
// });

let n=1;

let setin = setInterval(function(){
    console.log(new Date());
    if(n==5){
        clearInterval(setin);
    }
    n++;
},2000);

console.log("return interval",setin);
