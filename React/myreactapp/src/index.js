import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Tweet from './App';
import getGreeting from './jsx';
// import * as serviceWorker from './serviceWorker';

// let testTweet = { 
//     message:"something about vallab.",
//     gravatar:"https://www.gravatar.com/avatar/65f1fa011eeab4908c9f7135d0f964a1",
//     author :{
//         handle:"TweetPerson",
//         name : "vallab",
//     },
//     likes:2,
//     retweets:5,
//     timestamp:'2016-03-23 21:30:46'
// };


// ReactDOM.render(<Tweet tweet={ testTweet }/>, document.getElementById('root'));

ReactDOM.render(<getGreeting/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
