import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      text: ''
    }
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:5001/')
    const json = await response.json();
    const text = json.data;

    this.setState({
      text
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
