import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class MoodEntry extends Component {
  constructor(props) {
    super(props);

    this.continue = this.continue.bind(this);
  }

  continue(e) {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Daily Mood Entry!" />
          <TextField
            hintText="Mood"
            floatingLabelText="How're you feeling?"
            onChange={handleChange}
            name='mood'
            value={values.mood}
          />
          <br />
          <TextField
            hintText="Activities"
            floatingLabelText="Activities?"
            onChange={handleChange}
            name='activity'
            value={values.activity}
          />
          <br />
          <TextField
            hintText="Entry"
            floatingLabelText="Entry"
            onChange={handleChange}
            name='dailyEntry'
            value={values.dailyEntry}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default MoodEntry;