console.log('program started');
// to handle error we use try  block

function foo(){
    console.log('Executing function');
}
try {
    foo();

    try{
            throw new Error("it   is not found")
    }catch(er){
        console.log('innner catch',er);
    }

    throw new SyntaxError("something went wrong");
}catch(error){

        console.log('catch block');
        console.log(error);
} finally {
    console.log('fixing the function')
}


console.log('program ends');