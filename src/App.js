import React, { Component } from 'react';
import './App.css';
import LeaseList from './component/LeaseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeaseList/>
      </div>
    );
  }
}

export default App;
