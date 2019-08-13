
let subBtn = document.querySelector('button');

let inpt = document.querySelector('input');

let displayImg = document.querySelector('.images')


function getData(){

let value = inpt.value;

// jquery is access by $

let url = `https://api.giphy.com/v1/gifs/translate?api_key=LybTHK41QPUe8sVJMQqjnDrdBWymyLZN&s=jhon wick=${value}`;


$.ajax({

    url:url,
    method:'GET',

    success: function(resp){
        console.log(resp);

        let imgs = resp.data.images;
        
Object.keys(imgs).forEach(function(ele,i,arr){
    console.log(imgs[ele]);
    let img = document.createElement('img');

    img.src= imgs[ele].url;

    // document.body.appendChild(img);

    displayImg.appendChild(img);

});

    },

    error: function(err){
        console.log(err);
    }



})










}














subBtn .addEventListener('click', getData);