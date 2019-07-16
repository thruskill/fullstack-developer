var object = {
    addition:function(var1,var2){
        result = var1 + var2;
        console.log('thew result is',result);
    }
}
console.log(object.addition(3,4));


// object
var object ={
    addition:function(var1,var2){
        if(typeof var1 == '' || typeof var1 == 'string')
        {
            return 'wrong input';
        }
        else{
            return var1+var2;
        }
    }
}
console.log(object.addition('',3));