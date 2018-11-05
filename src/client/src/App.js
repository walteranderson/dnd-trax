import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      count: 0
    }
  }

  getMessage () {
    fetch('/api/hello')
      .then(res => res.json())
      .then(body => {
        this.setState({
          message: body.message,
          count: this.state.count + 1
        })
      })
  }

  render() {
    return (
      <div>
        <p>Message: {this.state.message}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.getMessage.bind(this)}>Get message from server</button>
      </div>
    );
  }
}

export default App;
