// creating a tag or any element
let header = document.createElement('h1');

header.innerText = "Dom-Events";

document.body.appendChild(header);

console.log(header);

// reading the elements and changing the innerText
// for accessing
let h = document.querySelector('h1');

console.log(h);


// changing the innerText

h.innerText = "DOM-EVENTS";
// changing style to  the tag
document.body.style.color='blue';
// document.body.style.background ="red";

// changing the  screen colors randomly

function randomNumber(min,max){
    return parseInt(Math.random()*(max-min)+min);
}
console.log(randomNumber);
document.body.style.background =`rgb(${randomNumber(1,255)} ${randomNumber(1,255)} ${randomNumber(1,255)})`;



