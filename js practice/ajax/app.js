// jquery introduces  the ready state, to overcome the problem page can't be manipulated safely until the document is ready. 

// $(document).ready(function(){
//     console.log('ready..');
// })


let xhr = new XMLHttpRequest();
// console.log(xhr);
function processData(){

if(xhr.readyState == 4){
    console.log(xhr);
    if(xhr.status == 200){
    document.getElementById('para').textContent=xhr.responseText;
    }
}
if(xhr.Status ==404){
    console.log("not found..!")
}

// console.log(JSON.parse(xhr.responseText));

// let data = JSON.parse(xhr.responseText);

// let p = document.querySelector('p');

// p.innerText = data.title;

// document.body.appendChild();

}

xhr.onreadystatechange = processData;

xhr.open('GET','https://jsonplaceholder.typicode.com/albums',true);

xhr.send('');