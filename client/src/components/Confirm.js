import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  constructor(props) {
    super(props);

    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
  }
  continue(e) {
    const { values: { mood, activity, dailyEntry } } = this.props;
    e.preventDefault();
    // PROCESS FORM //
    fetch('/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mood: mood,
        activity: activity,
        dailyEntry: dailyEntry
      })
    })
    .then(res =>
      res.json())
    .then(data => {
      console.log(`this is data: ${data}`);
    })
    .catch(err => {
      console.log(err);
    });
    this.props.nextStep();
  };

  back(e) {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values: { mood, activity, dailyEntry } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Daily Entry" />
          <List>
            <ListItem primaryText="Mood" secondaryText={mood} />
            <ListItem primaryText="Activity" secondaryText={activity} />
            <ListItem primaryText="Daily Entry" secondaryText={dailyEntry} />
          </List>
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm;
