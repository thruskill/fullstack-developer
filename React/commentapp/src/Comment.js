import React from 'react';
import logo from './logo.svg';
import './Comment.css';
import Avatar from './Avatar';
import UserName from './UserName';
import CommentTime from './CommentTime';
import Message from './Message';
function Comment() {
  
  return (
    <div className="comment">
      <Avatar/>
      <div>
        <UserName />
        <CommentTime/>
        <Message/>
      </div>

    </div>
  );
}

export default Comment;
