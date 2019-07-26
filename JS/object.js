/*var person ={
    Name :"vallab",
    Age :24,
    Gender : "male",
    // creating method
    displaying : function()
    {
        console.log('Accessing  person details'+age);

    }

}
    displaying.person();*/

    // 

    // var obj = {
    //     color:'blue',
    //     description:function(){
    //         console.log(this)
    //         function foo(){
    //             console.log('inner fn',this)
    //         }
    //         foo();
    //     }
    // }
    // obj.description();

    // creating  object

    let obj = {};

    let obj1 = new Object();

    obj1.name = 'vallab';

    console.log(obj1);

    let person = {
        name:'Bottle',
        color:'red'
    }

    let person2 ={};

    Object.assign(person2, person);

    console.log(person2);

    let o1 = {
        name:'mandeep reddy'
    }

let o2 = {
    name:'js',
    age:25
}

Object.assign(o1, o2);

console.log(o1);

let bot1 ={
    color:"red"
}

let bot2 ={
    color:'red'
}

let bot3 = bot1;
console.log(bot1===bot2);

console.log(bot1===bot3);

// json object

console.log(JSON.stringify(bot1) === JSON.stringify(bot2));

let nov = {
    name:'vallab'
}

let jsn = JSON.stringify(nov);

console.log(jsn);


// accessing object keys

let man ={
    name:'vallab',
    age:24,
    education:'engineering',
    Gender:'male',
    hobbies:'cricket,moovies,photography'
}

let keys = Object.keys(man);

console.log(keys);


for(let i=0;i<keys;i++){
    console.log(man[keys[i]]);
}
// forEach
Object.keys(man).forEach(ele => {
    console.log(man[ele])
});

// for in

for(var prop in man){
    if(man.hasOwnProperty(prop)){
        console.log(prop);
        console.log(man[prop])
    }
}


// for of loop

console.log("excuting for of");

for(let key of Object.keys(man)){
    console.log(key, man[key])
}

// parseInt(val, base);

let n = 22;

let num = parseInt(n);

console.log(typeof num);

console.log(parseInt(0xF,16));

// parseFloat();

let flt = 11.33;

console.log(parseFloat(flt));

console.log(parseInt(flt));

// isFinite is tocheck whether given value is finit or infinte value

console.log(isFinite(1e3088));

// isNaN(); to chech wheather given value is number or not

console.log(isNaN('qwerty'));


