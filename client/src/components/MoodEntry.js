import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class MoodEntry extends Component {

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
            defaultValue={values.mood}
          />
          <br />
          <TextField
            hintText="Activities"
            floatingLabelText="Activities?"
            onChange={handleChange}
            defaultValue={values.activities}
          />
          <br />
          <TextField
            hintText="Entry"
            floatingLabelText="Entry"
            onChange={handleChange}
            defaultValue={values.dailyEntry}
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