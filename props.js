class Codelab extends React.Component{
  render() {
    return(
      <div>
        <h1> Hello {this.props.name} </h1>
        <h2>{this.props.number}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
};

class App extends React.Component{
  render() {
    return(
      <Codelab name={this.props.name} number={this.props.number}> {this.props.children} </Codelab>
    );
  }
};

Codelab.propTypes = {
  name:React.PropTypes.string,
  number:React.PropTypes.number.isRequired
};

Codelab.defaultProps = {
  name: 'Unknown'
};


$(document).ready(function() { 
  ReactDOM.render(<App number={5}> I am yout children </App>, document.getElementById("root"));
});