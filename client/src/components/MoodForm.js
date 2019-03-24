import React, { Component } from 'react';

import MoodEntry from './MoodEntry';
import Activities from './Activities';
import NoteEntry from './NoteEntry';
import Confirm from './Confirm';
import Success from './Success';


class MoodForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 1,
        mood: '',
        dailyEntry: '',
        activity: '',
        moodCount: 0,
        users: [],
      };
      this.nextStep = this.nextStep.bind(this);
      this.previousStep = this.previousStep.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    nextStep() {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    }

    previousStep() {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
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
      const { step } = this.state;
      const { mood, moodCount, activity, dailyEntry, users } = this.state;
      const values = { mood, moodCount, activity, dailyEntry};

      switch (step) {
        case 1:
          return (
            <MoodEntry
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <Activities
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
          return (
            <NoteEntry
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              values={values}
            />
          );
        case 4:
          return (
            <Confirm
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              values={values}
            />
          );
          case 5:
          return (
            <Success
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              values={values}
            />
          );
      }
    }
}

  export default MoodForm;