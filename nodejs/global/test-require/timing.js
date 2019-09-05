setTimeout(function(){
    console.log("set time out");
},2000);


let i = 1;

  setInterval(function(){
    console.log("Every second");

    if(i == 4){
        clearInterval(this);
    }
    i++;

},1000);



setImmediate(function(){
    console.log('immediate');
});