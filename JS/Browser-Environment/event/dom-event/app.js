let btn = document.querySelector('button');

// btn.addEventListener('click',function(e){
//     console.log(e);
//     alert('hello');  
// })

function handler2(e){
    console.log(e);
    alert('hello');
}

function handler(e){
    console.log(e);
    alert("hii");
}

btn.addEventListener('click',handler);
btn.addEventListener('click',handler2);

btn.removeEventListener('click',handler2);