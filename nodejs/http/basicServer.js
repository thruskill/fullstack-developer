const http = require('http');



let server = http.createServer(function(req,res){

    // console.log(req);

    console.log(req.method, req.url);

    // console.log(req.url);
    if(req.url == '/'){
        res.end('Welcome to home page')

    }else if(req.url == '/about'){
        res.end('This is about page')
    }
    else{
        res.end('page  not found');
    }
    // res.end('server is working fine');
});



server.listen(3000, (err) =>{
    if(err) console.log(err);
    console.log('Server is up n running on port 3000')
});


// npm i nodemon -g command ,nodemon is used instead of node ,because everytime node command should be used