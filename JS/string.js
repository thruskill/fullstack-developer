// var name = "javascript"
// console.log(name);
// console.log(typeof name);

// var amount = "1234"
// console.log(amount);
// console.log(typeof amount);
// // Escape characters are used 
// // \escape character
// // \n new line
// // \t tab
// // \u to represent unicode symbol 
// var js = "This is the \"JavaScript\". "
// console.log(js);
// console.log(typeof js);

// var sent = "what\'s your name";
// console.log(sent);

// var para = "Hello Der!\nHow are you?";
// console.log(para);

// var  unicode = 'this is a unicode char \u03A9';
// console.log(unicode);

// var firstName="Vallab";
// var lastName="Mandeep Reddy";
// // concatenation
// var fullName=firstName+lastName;
// console.log(fullName);

// var about = "Hi  myself "+firstName+ ", I am nothing upto now.";
// console.log(about);

// // ES6 string literal
// var str = `Hello "There"

// How are you
// `;
// console.log(str);

// var  ab =`Hi myself ${fullName}. I am not a software engineer.`

// var fstLast = `Hi  myself ${firstName} ${lastName}. I am not  a developer`
// console.log(ab);
// console.log(fstLast);

// var full = 'hello'+ 10;
// console.log(full);
// console.log (typeof full);

// var num = 2*'a';
// console.log(num);
// console.log(typeof num);

// strings advanced

let primitive =  "Hello World";


console.log(primitive);

console.log(typeof primitive);

let str = new String('Hello JS');

console.log(str);

console.log(typeof str);

console.log(str[0]);

console.log(str.length);

console.log(primitive.length);


console.log(str.valueOf());
console.log(str.toString());


// charAt();

console.log(primitive.charAt(1));

// indexOf();

console.log(primitive.indexOf('o',5));

// substring();

console.log(primitive.substring(1,4));

// concat();

let first = 'java';
console.log(first.concat('script'));

// split();

let sent = 'learning full stack developer';

console.log(sent.split(' '));


// toLowercase(),toUpperCase()
console.log(sent.toUpperCase());



let str1 ="Hello world of Javascript";

let lower = str1.split(' ').join('-').toLowerCase();

console.log(lower);


let newStr = str1.toLowerCase().split(' ').map(e => e.charAt(0)).join('-');

console.log(newStr);

// lastIndexOf();

console.log(sent.lastIndexOf('f'));

// slice();

console.log(sent.slice(1,-5));

