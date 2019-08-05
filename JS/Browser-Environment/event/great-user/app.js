let btn = document.querySelector("button");


function greatUser(){
    // console.log("working");

    let inputValue =document.querySelector('#name').value;
console.log(inputValue);

let para = document.createElement('p');
if(inputValue){
para.innerText = `welcome to ${inputValue}`;
para.style.color ='blue';
document.body.appendChild(para);
}else {
    para.innerText = 'please provide your name';
    document.body.appendChild(para);
    para.style.color = "orange";
}
    // console.log(inputValue);
}
btn.onclick = greatUser;