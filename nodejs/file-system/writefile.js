const fs = require('fs');


// synchronous
// fs.writeFileSync(__dirname+'inpt.txt','Hello Der!', {encoding:'utf-8'});



// asynchronous

let d = 'my name is vallab';

let d2 = 'I am learning programming';

d3 = d+d2;

fs.writeFile(__dirname+'/inpt.txt',d3,function(err,data){
    if(err){
        console.log(err);
    
    }else{
        console.log('writing is done');
    }
});


// appendFile();


// createDir();

// removeDir();
// createFile();
// removeFile();
