const express = require('express');

const hbs = reqquire('hbs');
const app = express();

// setup view and view engine
app.set('views', __dirname+'/views');

app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

let products = [{
    
}]

app.get('/',(req,res) => {
    res.render('index',{
        name:'joe',
        fulname:'<p>Vallab Mandeep Reddy</p>',
        product:{
            name:'headphone',
            price:125,
            rating:4.5
        },
        hobbies:['football','basketball','cricket'],

        userName:'joe'
    });
})


app.listen(3000, () => console.log('server  up n running on port 3000'));

