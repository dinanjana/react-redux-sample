import React, { Component } from 'react';
import './App.css';
import LeaseTable from './component/LeaseTable';

const matrix = [[{data: 0},{data: 1},{data: 2},{data: 3}], [{data: 4},{data: 5},{data: 6},{data: 7}]];
class App extends Component {
  render() {
    return (
      <div className="App">
        <LeaseTable
          matrix = {matrix}
        />
      </div>
    );
  }
}

export default App;
