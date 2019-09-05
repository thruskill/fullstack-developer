

// function add(a, b, cb){
// if(typeof a == 'number' && typeof b == 'number'){
//     let addition = a+b;
//     return cb(null, addition);
// }else{
//     cb('pass a number', null);
// }

// }
// function square(n, cb){
//     if(typeof n == 'number'){
//         return cb(null, n*n);
//     }else{
//         return cb('square func accepts a number', null);
//     }
// }

// add(2,3, function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('addition data',data);

//         square(data, function(err, sqData){
//             if(err){
//                 console.log('square err',err)
//             }else{
//                 console.log('square data',sqData);
//             }
//         })

//     }
// });






function add(a,b){
    return new Promise(function(resolve, reject){
        if(typeof a == 'number' && typeof b == 'number'){
            let addition = a+b;
            resolve(addition);
        }
        else{
            reject('Add  function accepts a number ');
        }
    })
};



function square(n){
    return new Promise(function(resolve, reject){
        if(typeof n == 'number'){
            resolve(n*n);
        }else{
            reject(new Error('square accepts a number'))
        }
    })
}


// add(2,'3')
//         .then(function(d){
//             console.log('add then block',d)
//         })
//         .catch(err => console.log(err))




// add(2,3)
//     .then(d => square(d))
//     .then(sqd =>console.log(sqd))
//     .catch(err =>console.log(err))

add(2,3)
    .then(d =>console.log(d))
    .catch(err =>console.log(err))

square(3)
    .then(d => console.log(d))
    .catch(err => console.log(err));



    // // asynchronous await

    // Promise.all([add(2,3),square(5)])
    // .then(data => console.log('promise all',data))
    // .catch(err => console.log(err))