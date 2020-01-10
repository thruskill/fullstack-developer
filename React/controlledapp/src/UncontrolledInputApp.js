import React from 'react';

class TrickInput extends React.Component{
    state ={
        text:'try something new'
    }
    handleChange=(event)=>{
        this.setState({
            text:'haha nnope'
        })
    }
    render(){
        return(
            <input type='text' value={this.state.text}  onChange={this.handleChange}/>
        );
    }
}
export default TrickInput;