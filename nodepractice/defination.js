// Nodejs is used to  run javascript programs on serverside, and build with single-threaded with one process  at a time,non-blocking i/o ,asynchronously.



// example  for non-blocking


console.log('program begins');


setTimeout(function(){
    console.log('SETTIME OUT')
},2000);


console.log('program ends'); 


// 