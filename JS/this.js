// this  


function person(name,age){
    this.name = name;
    this.age =age;
    this.description=function(){
        console.log(this.age);
    }
    return 'hello';
}
var p =new person("vallab",24);
console.log(p);

var n = person ("reddy",20);
console.log('call as function',n);

p.gender ='male';
// console.log(name);
var h = new person("mandeep",23);

console.log(h);


// p.description();

console.log(h.name);

console.log(person.length);//return length of the function properties

console.log(person.constructor);

console.log(person.prototype);
console.log( typeof person.prototype);
person.myProp = 'my property';

console.log(person.myProp);