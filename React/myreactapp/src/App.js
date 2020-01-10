import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import moment from 'moment';
function Tweet({ tweet }) {
  return (
    
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count ={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
      
    </div>
     
   
 
      
  );
}

function Avatar({hash}){
  let url = `https://www.gravatar.com/avatar/${hash}`;
  return(
    <img src={url} className="avatar" alt="avatar" />
  );
}
 
function Message({text}){
  return(
    <div className="message"> {text}</div>
  );
}

function NameWithHandle({ author }){
  let { name, handle } = author;
  return(
    <span className="name-with-handle">
      <span className="name">{ name }</span>
      <span className="handle">@{handle}</span>

    </span>
  );
}

const Time = ({ time }) =>{
  const timeString = moment(time).fromNow();
  return(
    <span className="time">{ timeString }</span>
  );
  
};

const ReplyButton = () =>(
    <i className="fa fa-reply reply-button"/>
);


function Count(count){
  if( count > 0){
    return(
      <span className="retweet-count">{ count }</span>
    );
  }else{
    return null;
  }
}  

const RetweetButton = ({count}) =>(
  <span className="retweet-button">
    <i className="fa fa-retweet"/>
    {Count(count)}
  </span>
  
);


const LikeButton = ({ count }) =>(
  <span className="like-button">
    <i className="fa fa-heart"/>
    { count >0 &&
      <span className="like-count">
        {count}
      </span>

    }
  </span>
  
);

const MoreOptionsButton = () =>(
  <i className="fa fa-ellipsis-h more-options-button"/>
);





export default Tweet;
