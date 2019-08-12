let frm= document.querySelector('form');

frm.addEventListener('submit',function(e){
    e.preventDefault();
    
let name = document.querySelector('#name').value ;

// let name= frm[0].value;

let n=document.querySelector('input[name=email]').value;

let pas = document.querySelector('input[name=password]').value;

console.log(name);
console.log(n);
console.log(pas);
if(n==''){
    let para =document.createElement('para');
    para.innerText='Name field cannot be empty';

    para.style.color="red";
    document.body.appendChild(para);
}
console.log(n);

});

let nameField = document.querySelector('input[name=name]');

nameField.addEventListener('blur',function(e){
     let val = nameField.value;
    console.log(val.length);
     if( val !='' && val.length>2){
         nameField.style.border='1px solid red';
        //  para.innerText ='Name field is required';
        //  para.style.color='red';
     }
     else{
         nameField.style.border='1px  solid green';
     }
});

let emailField = document.querySelector('input[name=email]');

emailField.addEventListener('focus',function(e){
    emailField.style.border ='1px solid  green';
    para.innerText ='please pass  a  correct email';

    para.style.color='red';
})