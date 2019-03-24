import React, { Component } from 'react';

import MoodModal from './components/MoodModal';

class App extends Component {

    render() {
      return (
        <div className="App">
          <h1>Welcome to Mindful Matters!</h1>
          <hr></hr>
          <MoodModal />
        </div>
      );
    }
  }

  export default App;