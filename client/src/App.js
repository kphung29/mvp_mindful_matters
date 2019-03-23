import React, { Component } from 'react';

import Chart from './components/Chart';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
      };
    }

    componentDidMount() {
      fetch('/posts')
        .then(res => res.json())
        .then(data => this.setState({
          users: data,
        }))
        .catch(err => console.log(err));
    }

    render() {
      const { users } = this.state;
      return (
        <div className="container-fluid">
          <h1>Welcome to Mindful Matters!</h1>
          <img src="https://i.imgur.com/Vjft5Im.png" width="20%" />
          <Chart userData={users} />
        </div>
      );
    }
  }

  export default App;