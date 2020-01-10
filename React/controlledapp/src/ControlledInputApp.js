
import React from 'react';

class ControlledInputApp extends React.Component{
    state ={
        text:''
    };
    handleChange= (event)=>{
        let txt=event.target.value;
        txt= txt.replace(/[A-Z]/g,'');
        this.setState({
            text :txt
        });
    }
    render(){
        return (
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
        );
    }
}

export default ControlledInputApp;