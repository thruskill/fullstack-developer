import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import FileInput from './FileInput';
import BookApp from './Books';
// import * as serviceWorker from './serviceWorker';


// let testTweet = {
//     message:'someething about props.',
//     gravatar:'xyz',
//     author:{
//         handle:'cat person',
//         name: 'vallab'
//     },
//     likes:2,
//     retweets:0,
//     timestamp:'2016-03-30 21:24:37'

// };

ReactDOM.render(<BookApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
