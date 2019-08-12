let move = document.querySelector('.move');
let head = document.querySelector('h1');



function shadow(e){


    console.log(e.target);

    let {offsetHeight:height, offsetWidth:width} = move;

    let {clientX: x, clientY: y} =e;

    head.style.textShadow=`${x}px ${y}px 0 green`;
}
div.addEventListener('mousemove',shadow);