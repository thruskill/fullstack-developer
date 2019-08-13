let xhr = new XMLHttpRequest();

function handleData() {

    if(xhr.readyState >3){
        return;
    }
    // httpstatuses.com  for http messages
    if(xhr.status !=200){
        return;
    }

    console.log(JSON.parse(xhr.responseText));


}

xhr.onreadystatechange=handleData;
// website for  free api for testing
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);


xhr.send('');