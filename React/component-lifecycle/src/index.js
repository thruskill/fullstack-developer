import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import * as serviceWorker from './serviceWorker';
class ErrorCatcher extends React.Component{
    state = {error: null}

    componentDidCatch(error, info){
        console.log('[componentDidCatch]',error);
        console.log(info);
        this.setState({ error: info.componentStack});
    }

    render(){
        if(this.state.error) {
            return (
                <div>
                    An error occurred: {this.state.error}
                </div>
            )
        }

        return this.props.children;
    }
}

class LifecycleDemo extends React.Component {
    // Initialize state function
    // {happens before constructor}
    state ={counter:0};
    // THE FIRST METHOD CALLED AFTER INITIALIZING state

    constructor(props){
        super(props);
        console.log('[consstructor]');
        console.log(' state already set',this.state);
    }

    componentDidMount(){
        console.log('[componentDidMount]','Mounted');
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('[getDerivedFromProps]');
        console.log(' Next props',nextProps);
        console.log(' Prev State',prevState);
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('[shouldComponentUpdate]','Deciding to update');
        return true;
    }
    getSnapshotBeforeUpdate(nextProps, nextState){
        console.log('[getSnapshotBeforeUpdate]','About to update..');
        return `time is ${Date.now()}`;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]','Update.');
        console.log('  snapshot:', snapshot);
    }
    componentWillUnmount(){
        console.log('[componentWillUnmount]','Goodbye cruel world');

    }
    handleClick =()=>{
        this.setState({
            counter:this.state.counter+1
        });
    };
    causeErrorNextRender = () =>{
        this.setState({
            causeError:true
        });
    };

    render(){
        console.log('[render]');
        if(this.state.causeError){
            throw new Error('oh no!!');
        }
        return(
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
            </div>
        );
    }
}

ReactDOM.render(<ErrorCatcher>
    <LifecycleDemo/>
    </ErrorCatcher >,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
