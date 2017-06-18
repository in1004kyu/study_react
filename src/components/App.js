import React from 'react';
//var React = require('react'); 와 동일
import Contact from './Contact';
 
class App extends React.Component {
    render(){
        return (
            <Contact/>
        );
    }
}
 
export default App;
//다른곳에서 App을 사용할 수 있도록
//module.export = App; 와 동일