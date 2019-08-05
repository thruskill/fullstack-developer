// creatimg h1 element and adding text to it.
let heading = document.createElement('h1');

heading.innerText = 'Reversing a string.';

// appendchild to body
document.body.appendChild(heading);

console.log(heading);


// creting assignment3
let assignment3 = ['ReverseString','ConfirmEnding'];

if(assignment3.length > 0)
{
let h2 = document.createElement('h2');

h2.innerText ='Assignment3';

let ul = document.createElement('ul');

for(let i=0;i<assignment3.length;i++){
    
ul.innerHTML +=`<li>${assignment3[i]}</li>`
    
}
document.body.appendChild(h2);
document.body.appendChild(ul);
}

// creating string object
let str  = new String('hello');

console.log(str);

console.log(typeof str);

console.log(str.lastIndexOf('e'));

let str1 =  'Happy Friendship day';

let rev = str1.split('').join('-');

console.log(rev);


// reverse a string using function



function reverseString(str2){
    // creating split array and it will split given string
    let splitString = str2.split("");

    console.log(splitString);
    // then reverse a string using reverse method.

    let reverseArray = splitString.reverse();

    console.log(reverseArray);
    // then join the string


    let joinArray = splitString.join('');

    console.log(joinArray);
}

reverseString("hello");

reverseString('happy friendship day');

//  spliting a  string reversing array aND JOIN

let arr = [];
function reverseArray(str3){
    let splitString = str3.split("").join();

    console.log(splitString);


    arr.push(splitString);
    console.log(arr);
    console.log(typeof arr);
    let reve = arr.reverse();

    console.log(reve);

    let joinArr = arr.join();

    console.log(joinArr);

    console.log(typeof joinArr);

}

reverseArray('journey');
reverseArray('trip');
