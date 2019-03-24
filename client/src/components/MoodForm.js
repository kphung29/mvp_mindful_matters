import React, { Component } from 'react';

import MoodEntry from './MoodEntry';

class MoodForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 5,
        mood: '',
        dailyEntry: '',
        activity: '',
        moodCount: 0,
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
      const { mood, moodCount, activity, dailyEntry } = this.state;
      const values = { mood, moodCount, activity, dailyEntry};

      // if (step === 1) {
      //   return (
      //     <MoodEntry />
      //   )
      // }
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
            // <FormPersonalDetails
            //   nextStep={this.nextStep}
            //   prevStep={this.prevStep}
            //   handleChange={this.handleChange}
            //   values={values}
            // />
            <h1>This is Activities</h1>
          );
        case 3:
          return (
            // <Confirm
            //   nextStep={this.nextStep}
            //   prevStep={this.prevStep}
            //   values={values}
            // />
            <h1>This is DailyEntries</h1>
          );
        case 4:
          return (
            <h1>This is Confirm</h1>
          );
        case 5:
          return (
            <h1>Success</h1>
          );
      }
  }
}

  export default MoodForm;