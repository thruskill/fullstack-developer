const fs = require('fs');
const path = require('path');


// console.log(path.join(__dirname,'../blocking.js'));

console.log('program starts');

// synchronous way

let file = path.join(__dirname,'../blocking.js');

// console.log(file);

// let data = fs.readFileSync(file, {encoding:'utf-8'});



// asaynchronous

fs.readFile(file, {encoding:'utf-8'}, function(err, data){

    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


// console.log(data);

console.log('program ends');