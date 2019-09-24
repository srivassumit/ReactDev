import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div>
        {/* double {{}} because we are passing the style {} object ot the {} JSX expression*/}
        <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
        <p>I'll check back in {this.props.minutes} minutes</p>
      </div>
    );
  }
}
ReactDOM.render(
  // the number value should be within {} as a JSX expression
  <Message color="blue" minutes={5} msg="how are you?" />,
  document.getElementById('root')
);
