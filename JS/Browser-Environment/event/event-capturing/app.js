let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner');

let btn = document.querySelector('button');

function outerDiv(){
    alert('outer div');
    outer.style.border = '1px solid orange';
}

function innerDiv()
{
    alert('inner div');
    inner.style.border = '1px solid blue';
}

function btnHandler(){
    // e.stopPropagation();
    alert('button');
    btn.style.border ='1px solid red';
}

outer.addEventListener('click',outerDiv,true);
inner.addEventListener('click',innerDiv,true);
btn.addEventListener('click',btnHandler,true);