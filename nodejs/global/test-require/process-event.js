let i = 1;

  setInterval(function(){
    console.log("Every second");

    if(i == 4){
        clearInterval(this);
    }
    i++;

},1000);


process.on('exit',function(){
    console.log('exiting the process')
});


process.on('uncaughtException',function(){
    console.log('Error occurs');
});





// REPL => READ EVALUATE PRINT LOOP
