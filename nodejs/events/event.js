let events = require('events');

let emitter = new events.EventEmitter();

// default max listener limit is 10
emitter.setMaxListeners(15);

emitter.on('knock',function(){
    console.log(`who's there`);
});


emitter.on('knock',function(){
    console.log('how are you?');
});

// emitter.on('knock', () => console.log('3'));
// emitter.on('knock', () => console.log('4'));
// emitter.on('knock', () => console.log('5'));
// emitter.on('knock', () => console.log('6'));
// emitter.on('knock', () => console.log('7'));
// emitter.on('knock', () => console.log('8'));
// emitter.on('knock', () => console.log('9'));
// emitter.on('knock', () => console.log('10'));
// emitter.on('knock', () => console.log('11'));

// emitter.emit('knock');

// emitter.emit('knock');


// once calls only once
emitter.once('click',function(){
    console.log('Got clicked');
});

emitter.emit('click');
emitter.emit('click');


// sendEmail

function mailSent(){
    console.log('send Email');
}

emitter.on('sendEmail', mailSent);



emitter.on('sendEmail',function(name){
    console.log(`Email sent to ${name} successfully`);
});

emitter.emit('sendEmail','vallab');

emitter.removeListener('sendEmail',mailSent);

// emitter.emit('sendEmail','vallab');
