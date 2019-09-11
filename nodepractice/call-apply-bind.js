let person = {
    name :'vallab',
    age :24,
}

let person2 = {
    name:'mandeep',
    age:23,

}

let  person3 =  {
    name:'devara',
    age:25,
}

function description(){
    console.log(`my name is ${this.name} and i am ${this.age} years old.`)


}
// call()
description.call(person);

// apply()
description.apply(person2);

// bind()it will not execcute the function  but display the content

let des = description.bind(person3);

des();