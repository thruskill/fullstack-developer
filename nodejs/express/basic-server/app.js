const express = require('express');

const app = express();

// middileware to read body  data
app.use(express.json());


app.get('/',function(req,res) {
    res.send('working fine..');

    // res.write(data, (err) =>{
        //  console.log(err);
    // })



});



app.get('/contact', function(req,res){
    console.log(req.query);
    res.send('Thanks for contacting');
});

// checck in postman
app.post('/contact', function(req,res){
    console.log(req.body);
    res.send('Data received');
})


app.listen(3000, () => console.log('Server running succcessfully on port 3000'));