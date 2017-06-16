import React from 'react';
//var React = require('react'); 와 동일
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    render(){
        return (
            <div>
                <button onClick={() => {this.setState({name: 'velopert'});}}>Click Me</button>
                <h1>Hello {this.state.name}</h1>
            </div>
        );
    }
}
 
export default App;
//다른곳에서 App을 사용할 수 있도록
//module.export = App; 와 동일