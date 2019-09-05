const js = require('fs');

let readStream = fs.createStream(__dirname+'/inpt.txt');

readStream.setEncoding('utf8');

let writeStream = fs.createWriteStream(__dirname+'/piping.txt',{encoding:'utf8'});

readStream.pipe(writeStream);