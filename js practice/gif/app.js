let subBtn = document.querySelector('button');

let inpt = document.querySelector('input');

let displayImg = document.querySelector('.images');

function getData(){
    let value = inpt.value;
    // console.log(value);
    // creating xhr xmlhttprequest object to share data  from server

    let xhr = new XMLHttpRequest();
    function handler(){
        displayImg.innerHTML = '';
        if(xhr.readyState >4){
            return;
        }
        if(xhr.readyState !=200){
            return;
        }
        
        console.log(JSON.parse(xhr.responseText));

        let  resp = JSON.parse(xhr.responseText);

        let imgs = resp.data.images;

        Object.keys(imgs).forEach(function(ele,i,arr){
            console.log(imgs[ele]);
            let img = document.createElement('img');

            img.src= imgs[ele].url;

            // document.body.appendChild(img);

            displayImg.appendChild(img);


    });



        } 

        xhr.onreadystatechange = handler;

        xhr.open('GET','https://api.giphy.com/v1/gifs/translate?api_key=LybTHK41QPUe8sVJMQqjnDrdBWymyLZN&s='+value,true);
        xhr.send('');
}



subBtn.addEventListener('click',getData);