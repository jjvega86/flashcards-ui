import React, {Component} from 'react';
import './app.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="container">
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default App;