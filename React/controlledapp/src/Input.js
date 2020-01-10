import React from 'react';

class InputBox extends React.Component{
    state = {text:''}
    handleChange = (event)=>{
        this.setState({
            text:event.target.value
        });
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
            </div>
        )

        
    }
}
export default InputBox;