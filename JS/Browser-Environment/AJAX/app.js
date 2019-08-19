let xhr = new XMLHttpRequest();
// console.log(xhr);

function handleData() {

    if(xhr.readyState >3){
        return;
    }
    // httpstatuses.com  for http messages
    if(xhr.status !=200){
        console.log("File not found by server");
    }

    console.log(JSON.parse(xhr.responseText));

    let data = JSON.parse(xhr.responseText);

    // let p = document.querySelector('P');

    // p.innerText = data.title;

    // document.body.appendChild();

} 

xhr.onreadystatechange = handleData;
// website for  free api for testing
xhr.open('GET','https://jsonplaceholder.typicode.com/albums',true);


xhr.send('');