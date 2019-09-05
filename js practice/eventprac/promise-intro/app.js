let head =  document.createElement('h1');

head.innerText = "Check Console";

document.body.appendChild(head);

// using callback

// function add(a, b,cb){
//     if(typeof a == 'number' && typeof b == "number"){
//         let addition = a+b;
//         return cb(null,addition);
//     }else
//     {
//          cb("only numbers are accepted",null);
//     }
// }

// function square(n,cb){
//     if(typeof n == "number"){
//         return cb(null ,n*n);

//     }else{
//         return cb('pass a number',null);
//     }
// }

// add(3,4, function(err,data){
//     if(err){
//         console.log("addition",err)
//     }
//     else{
//         console.log("addition data",data);

//         square(data,function(err,sqdata){
//             if(err){
//                 console.log("square err",err);
//             }
//             else{
//                 console.log("squaredata",sqdata);
//             }
        
//         });

//     }
    
// });


// promises  are used to overcome  callback hell

function add (a, b)
{
    return new Promise(function(resolve,reject){
        if(typeof a == "number" && typeof b == 'number'){
            let addition = a+b;
            return resolve(addition);
        }else{
            return reject("pass a number");
        }
    });
    
}

function square(n){
    return new Promise(function(resolve,reject){
        if(typeof n == "number"){
            resolve(n*n);

        }
        else{
             reject(new Error("square required a number"))
        }
    })
}

// add(2,3)
// .then(d => square(d))
// .then(sqrd=>console.log(sqrd))
// .catch(err => console.log(err))


// add(2,4)
// .then(d => console.log(d))
// .catch(err => console.log(err))

// square(8)
// .then(d=> console.log(d))
// .catch(err => console.log(err));

Promise.all([add(3,6),square(9)])
.then(data => console.log("promise all data",data))
.catch(err => console.log(err))
