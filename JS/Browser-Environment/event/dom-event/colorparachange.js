let btn = document.querySelector('button');

function randomNumber(min,max){
    return parseInt(Math.random()*(max-min)+min);
}
function color(e){
    console.log(e);
    document.body.style.backgroundColor =`rgb(${randomNumber(1,255)} ${randomNumber(1,255)} ${randomNumber(1,255)})`
    
}

function para(e){
    console.log(e);
    alert("paragraph");
    btn.removeEventListener('click',para);
}

btn.addEventListener('click',para);

btn.addEventListener('click',color);