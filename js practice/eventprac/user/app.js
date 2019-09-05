// reading the button
let btn = document.querySelector("button");

// creating function for the button
function userText(){

    let inputValue = document.getElementById('nam').value;
    // printing the name
    console.log(inputValue);

    let para = document.createElement("p");
    if(inputValue){
        para.innerText =`This is ${inputValue}`;
        para.style.color ="green";
        document.body.
    }

}
btn.onclick = userText;