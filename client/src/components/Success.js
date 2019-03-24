import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  constructor(props) {
    super(props);

    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
  }
  continue(e) {
    e.preventDefault();
    this.props.nextStep();
  };

  back(e) {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Your Mood Entry has been recorded!  Get out the dashboard for your progress!</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;