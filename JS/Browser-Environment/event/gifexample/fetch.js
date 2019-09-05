let subBtn = document.querySelector('button');

let inpt = document.querySelector('input');

let displayImg = document.querySelector('.images')

function getData(){
    let value =inpt.value;
let url=`https://api.giphy.com/v1/gifs/search?api_key=LybTHK41QPUe8sVJMQqjnDrdBWymyLZN&q=${value}&limit=5&offset=0&rating=G&lang=en
`;



displayImg.inneeHTML = '';
fetch(url)
.then(resp => resp.json())
.then(d => {
    console.log(d);

    d.data.forEach((ele,i) => {
        console.log(ele.images.downsized.url);
       
        let img = document.createElement('img');

    img.src= ele.images.downsized.url;

    // document.body.appendChild(img);

    displayImg.appendChild(img);


    });


})
.catch(err => { 
    let p = document.createElement('p');


    p.innerText = 'gif not found';

    displayImg.appendChild(p);
});

}

subBtn.addEventListener('click', getData);