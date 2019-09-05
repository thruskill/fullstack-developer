const userList = require('./userexam');


let user = new userList.UserList();



user.on('save',function(){
    console.log('user saved succesfully');
});


user.on('error',function(err){
    console.log('error',err);
})

user.add({'name':'js'});

user.add({});




console.log(user.all());