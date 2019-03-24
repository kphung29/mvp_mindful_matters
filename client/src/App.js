import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Chart from './components/Chart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to Mindful Matters!</h1>
        <hr></hr>
        {/* <Navigation /> */}
        <Chart />
      </div>
    );
  }
}

export default App;