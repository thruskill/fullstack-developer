 let anc = document.querySelector('a');
let n= 4;
 anc.onclick = function(e){
console.log(e);
console.log(e.target);

console.log(this);
    if(n==5){
    // create default behaviour
    }else{
        e.preventDefault();
    }  
     // console.log(e);
 }
 