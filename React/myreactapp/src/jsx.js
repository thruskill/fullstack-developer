import React from 'react';

function formatNames(user){
    return user.firstName+''+user.lastName;

}

const user ={
    firstName:'devara',
    lastName:'reddy'
};

function getGreeting(user){
        if(user){
        return <h1>Hello,{formatNames(user)}!</h1>;
        }
        
            <h1>Hello, Stranger</h1>
        
}

export default getGreeting;