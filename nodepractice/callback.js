function sub(a,b,cb){
    if(typeof a != 'number' || typeof b !='number'){
        cb('pass a number',null);
    }else{
        cb(null,a-b);
    }
}

sub('a',3, function(err,data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});