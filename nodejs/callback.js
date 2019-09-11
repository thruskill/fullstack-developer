function square(n,cb){
    if(typeof n != 'number'){
cb('pass a number',null);

    }else{
        cb(null,n*n);
    }
}

square('12',function(err,data){
    if(err){
        console.log(err);

    }else{
        console.log(data);
    }
})