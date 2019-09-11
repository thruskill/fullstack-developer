// let fruit = {
//     name :'maango',
//     quantity :6,
//     description : function(){
//         console.log(`${this.quantity} ${this.name} remaining`)
//     }
// }

// let fruit2 = {
//     name :'apple',
//     quantity :5,
//     description : function(){
//         console.log(`${this.quantity} ${this.name} remaining`)
//     }
// }

// let fruit3 = {
//     name :'pineapple',
//     quantity :4,
//     description : function(){
//         console.log(`${this.quantity} ${this.name} remaining`)
//     }
// }

// console.log(fruit.description());





let fruit = {
    name :'maango',
    quantity :6,
   
}

let fruit2 = {
    name :'apple',
    quantity :5,
   
}

let fruit3 = {
    name :'pineapple',
    quantity :4,
    
}

     function description(name){
    console.log(`${name} has ${this.quantity} ${this.name} remaining`)
}

// call() pass the context to function

description.call(fruit,'vallab');

description.call(fruit2,'js');

// apply();

description.apply(fruit3, ['vallab']);

// bind();
// BIND won't execute function but return  with the context provided.


let des = description.bind(fruit,['mandeep']);

des();


function foo(a,b,c){
    // console.log(arguments.length);

    Array.prototype.push.call(arguments,56);

    console.log(arguments);
}


foo(2,3,4);