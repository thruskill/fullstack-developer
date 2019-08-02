// we have two para's with same class name and we can  acccess using querySelectorAll

let para = document.querySelector('.myClass');

console.log(para);

let both = document.querySelectorAll('.myClass');

console.log(both);

let secondPara = document.querySelector('.secondPara');
console.log(secondPara.childNodes); //space is consider as a text


let lastPara =document.querySelector('.para');

console.log(lastPara);

lastPara.lastChild.textContent = 'Dynamic value';

let paraFirstChild = secondPara.firstChild;

paraFirstChild.nodeValue = 'This is em tag';

console.log(paraFirstChild);

// innerText and innerHTML

lastPara.innerText = "Hello using innerText Property <span>Testing innerHTML </span>";


lastPara.style.color = 'tomato';

lastPara.style.border = '1px solid black';

console.log(lastPara.style.cssText);

lastPara.style.cssText = 'color:blue; border:1px solid  black';

lastPara.style.cssText += 'font-size: 20px ';

// accessing classList

console.log(secondPara.classList);

secondPara.className += 'dynamic-class';

console.log(secondPara.classList[1]);

// replacing className

secondPara.className = 'secondPara';

console.log(secondPara.classList[0]);

secondPara.className += ' dynamicClass';



console.log(secondPara.classList[1]);

console.log(secondPara.dataset.id);
