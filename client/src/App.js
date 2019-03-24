import React, { Component } from 'react';

import MoodForm from './components/MoodForm';

class App extends Component {

    render() {
      return (
        <div className="App">
          <h1>Welcome to Mindful Matters!</h1>
          <img src="https://i.imgur.com/Vjft5Im.png" width="20%" />
          <MoodForm />
        </div>
      );
    }
  }

  export default App;