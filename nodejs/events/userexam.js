const EventEmitter = require('events');
// util gives no of utility functions
const util = require('util');
let  user = [
        {
            name='vallab',
            last ='mandeep'
        }

];


function UserList(){
    // it will inherit all own properties
    EventEmitter.call(this);

}

// inherit protype properties also
util.inherits(UserList, EventEmitter);

UserList.prototype.add = function(obj){
    console.log('Add function',obj);

if(Object.keys(obj).length <0){
    this.emit('error', new Error('user obj is empty'))
}else{
    user.push(obj);
    this.emit('save');
}
}


UserList.prototype.all = function(){
    return user;

}

module.exports.UserList =UserList;