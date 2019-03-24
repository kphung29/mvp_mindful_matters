import React from 'react';

import Navigation from './components/Navigation';

const App = (props) => {

  return (
    <div className="App">
      <h1>Welcome to Mindful Matters!</h1>
      <hr></hr>
      <Navigation props={props}/>
    </div>
  );
}


  export default App;