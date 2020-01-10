import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    state = {
        counter: 0
    }

    handleAction = (action) => {
        console.log('child clicked :' + action);
        this.setState({
            counter: this.state.counter+1
        });
    }
    render(){
        return(
            <div>
                <Child onAction={this.handleAction}/>
                <p>Clicked {this.state.counter} times.</p>
            </div>
        );
    }
}


export default Parent;


// class BadExample extends Component{
//     state ={
//         data:Props.data
//     }
//     componentDidUpdate(oldProps){
//         if(oldProps.data !== this.props.data){
//             this.setState({
//                 data:this.props.data
//             });
//         }
//     }
//     render(){
//         return(
//             <div>The data:{this.state.data}</div>
//         )
//     }
// }

// export default BadExample;

