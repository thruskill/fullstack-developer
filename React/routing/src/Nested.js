import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-dom-router';

function Nested(){
    return(
        <Router>
            <div>
                <Header/>
                <Route path='/' component={Home}/>
                <Route path='/about/' component={About}/>
                <Route path='/topics' component={Topics}/>
            </div>
        </Router>
    );
}


function Home(){
    return <h3>Home</h3>;
}
function About(){
    return <h3>About</h3>;
}
function Topic({match}){
    return <h3>requested params:{match.params.id}</h3>
}

