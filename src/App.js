import React, { Component } from 'react';
// import logo from './logo.svg';
// import {Button} from 'antd'
import './App.less';
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
