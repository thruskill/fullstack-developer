console.log(document.documentElement.childNodes);

// console.log(document.documentElement.childNodes[2].style.background="blue";

function randomNumber(min,max){
    return parseInt(Math.random()* (max-min) +min)
}

console.log(randomNumber(1,255));

// document.documentElement.childNodes[2].style.backgroundColor= `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;

// assigment is create a  function and give nodes(html,body,head) to function and  it should return childnodes.
 


// another way to  access body using query selctor to change background color.
let bd = document.querySelector('body');
bd.style.backgroundColor=`rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;