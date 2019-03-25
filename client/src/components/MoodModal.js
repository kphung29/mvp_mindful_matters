import React, { Component } from 'react';
import { Button, Icon, Image, Modal, Form, Message, Container } from 'semantic-ui-react';

class MoodModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mood: '',
      dailyEntry: '',
      activity: '',
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleActivitySelect = this.handleActivitySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  open() {
    this.setState({
      open: true
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSelect(e, { value }) {
    this.setState({
      mood: value
    })
  }

  handleActivitySelect(e, { value }) {
    this.setState({
      activity: value
    })
  }

  handleSubmit(e) {
    const { mood, activity, dailyEntry } = this.state;
    e.preventDefault();
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
  }

  render() {
    const { open } = this.state
    const { dailyEntry, activity } = this.state
    const options = [
      { key: 'happy', text: 'happy', value: 'happy' },
      { key: 'good', text: 'good', value: 'good' },
      { key: 'so-so', text: 'so-so', value: 'so-so' },
      { key: 'anxious', text: 'anxious', value: 'anxious' },
      { key: 'sad', text: 'sad', value: 'sad' },
      { key: 'angry', text: 'angry', value: 'angry' },
    ];

    return (
      <Container>
      <Modal
      open={open}
        onOpen={this.open}
        onClose={this.close}
        size='large'
        trigger={
          <Button primary icon>
            Enter Mood for Today <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Mood Entry</Modal.Header>
        <Modal.Content>
        <div className='image'>
          <Image className="ui medium centered image" src="https://i.imgur.com/Vjft5Im.png" name="smile" size="massive"/>
        </div>
        <br/>
          <Form success>
        <Form.Group widths='equal'>
          <Form.Select fluid label='Mood' options={options} placeholder='Mood' onChange={this.handleSelect} required />
        </Form.Group>
        <Form.Group inline>
          <label>Activities</label>
          <Form.Radio
            label='work'
            name='work'
            value='work'
            checked={activity === 'work'}
            onChange={this.handleActivitySelect}
          />
          <Form.Radio
            label='gym'
            name='gym'
            value='gym'
            checked={activity === 'gym'}
            onChange={this.handleActivitySelect}
          />
          <Form.Radio
            label='sleep'
            name='sleep'
            value='sleep'
            checked={activity === 'sleep'}
            onChange={this.handleActivitySelect}
          />
          <Form.Radio
            label='coding'
            name='coding'
            value='coding'
            checked={activity === 'coding'}
            onChange={this.handleActivitySelect}
          />
           <Form.Radio
            label='movies'
            name='movies'
            value='movies'
            checked={activity === 'movies'}
            onChange={this.handleActivitySelect}
          />
          <Form.Radio
            label='reading'
            name='reading'
            value='reading'
            checked={activity === 'reading'}
            onChange={this.handleActivitySelect}
          />
           <Form.Radio
            label='meditation'
            name='meditation'
            value='meditation'
            checked={activity === 'meditation'}
            onChange={this.handleActivitySelect}
          />
          <Form.Radio
            label='date night'
            name='date night'
            value='date night'
            checked={activity === 'date night'}
            onChange={this.handleActivitySelect}
          />
        </Form.Group>
        <Form.TextArea label='Daily Entry' name='dailyEntry' value={dailyEntry} onChange= {this.handleChange} placeholder={`Any thoughts you'd like to share?`} required />
        <Message success header="Daily Entry Saved!" content="Check the dashboard for your progress!"/>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
      </Container>
    )
  }
}

export default MoodModal;
