let str = "Welcome to the world of  nature."

console.log(str);
console.log(typeof str);

// doing concatination and \t  tab spacing \n next line and escape character  
// \t tab
let firstName =  "Devara Vallab\t";

let  lastName = "Mandeep Reddy";
// concatination
let fullName = firstName+lastName;

console.log(fullName);

let para = "Hello Dear \n"+firstName+", kaisee huu ";

console.log(para);

// \escape character for displaying singke quotes and double quotes.

let pro = "world no  of  place \"kerala\".";

console.log(pro);


// ES6 string literals

let str1 = `Hello "grover",kaisee huu`;

console.log(str1);

console.log(typeof str1);

let full = `my self "${firstName}\t ${lastName}",I am going to be a Traveller.`

console.log(full);

let sum = "hello"+20;

console.log(sum);

console.log(typeof sum);

let mul =  10*"s";

console.log(mul);

console.log(typeof mul);

// advanced methods in string.

let primitive = "Hello wrld";

console.log(primitive);
console.log(typeof primitive);



let str2 = "Travelling keeps you cool."


console.log(str2.split(' '));

console.log(primitive.length);
console.log(primitive[0]);

// creating new string object using new keyword.

let str3 = new String('hello guru');
 console.log(str3);

 console.log(str3.length);

 console.log(typeof str3);

 console.log(str3.valueOf());

 console.log(str3.toString());

//  charAt();

console.log(str3.charAt(6));

// indexOf();

console.log(str3.indexOf('guru'));

// substring();


console.log(str3.substring(2,7));

// concat();

let first = "vallab";

console.log(first.concat("mandeep"));

// split and joinand toUpperCase()

let split = str3.split(' ').join('-').toUpperCase();
console.log(split);

let vocabulary = "INDIA IS A NATION WHICH CONTAINS RICH RESSOURCES.";
// clarify doubt with sir.
let short = vocabulary.toLowerCase().split(' ').map(n =>n.charAt(1)).join('-');

console.log(short);

// slice

console.log(vocabulary.slice(0,10));    

// lastIndexOf()

console.log(vocabulary.lastIndexOf('N'));