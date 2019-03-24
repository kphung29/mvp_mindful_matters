import React from 'react';

import Navigation from './components/Navigation';
import MoodHistory from './components/MoodHistory';

const App = () => {

  return (
    <div className="App">
      <h1>Welcome to Mindful Matters!</h1>
      <hr></hr>
      {/* <Navigation props={props}/> */}
      <MoodHistory />
    </div>
  );
}


  export default App;