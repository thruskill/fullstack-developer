import React from 'react';

class FileInput extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event){
        event.preventDefault();
        alert(`selected file is ${this.fileInput.current.files[0].name}`);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload a file:
                    <input type='file' ref={this.fileInput} />
                </label>
                <button type="submit">Suubmit</button>
            </form>
        );
    }
}

export default FileInput;