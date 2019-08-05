let para =document.createElement('p');

para.innerText = 'Dynamic Element';

document.body.appendChild(para);


console.log(para);

let hobbies = ['cricket','volleyball'];

if(hobbies.length > 0){
    let h2 = document.createElement('h2');
    h2.innerText = "Hobbies";

    let ul = document.createElement('ul');
    for(let i=0;i<hobbies.length;i++){
        ul.innerHTML +=`<li>${hobbies[i]}</li>`
    }
    document.body.appendChild(h2);
    document.body.appendChild(ul);
}

