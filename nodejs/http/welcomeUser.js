const http = require('http');

const url =  require('url');

let server = http.createServer();



server.on('request', function(req,res){

    console.log('Headers',req.headers);

    console.log(req.method, req.url);

    let parsedURL = url.parse(req.url, true);


    console.log(parsedURL);

if(parsedURL.pathname == '/' && parsedURL.query.name){

    res.writeHead(200,{'content-type':'text/html'})

    res.end(`working ${parsedURL.query.name}`);

}else{
    res.writeHead(404,{'content-type':'text/html'})

    res.end('page not found');
}

});


server.listen(3005, () => console.log('server running on port 3005'));