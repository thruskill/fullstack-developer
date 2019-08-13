// steps

/*

* First access input field, submit button, display image div


* attach a click event on submit  button

* inside event handler access input value

* create a xhr objecct

* make request

* inside readystatechange handler access the data

* make the imge display on dom



*/




let subBtn = document.querySelector('button');

let inpt = document.querySelector('input');

let displayImg = document.querySelector('.images')


function getData(){
    let value = inpt.value;
let xhr= new XMLHttpRequest();


function handler(){
displayImg.innerHTML = '';

if(xhr.readyState < 4){
return;
}

if(xhr.status != 200){
    return;

}
console.log(JSON.parse(xhr.responseText))


let resp =JSON.parse(xhr.responseText);

let imgs = resp.data.images;


Object.keys(imgs).forEach(function(ele,i,arr){
    console.log(imgs[ele]);
    let img = document.createElement('img');

    img.src= imgs[ele].url;

    // document.body.appendChild(img);

    displayImg.appendChild(img);

});

// console.log(resp.data.images.downsized.url);

}

xhr.onreadystatechange = handler;

xhr.open('GET', 'https://api.giphy.com/v1/gifs/translate?api_key=LybTHK41QPUe8sVJMQqjnDrdBWymyLZN&s=jhon wick='+value,true);


xhr.send('');

}






subBtn.addEventListener('click',getData);