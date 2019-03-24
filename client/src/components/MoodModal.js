import React, { Component } from 'react';
import { Button, Icon, Image, Modal, Form } from 'semantic-ui-react';



class MoodModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      step: 1,
      mood: '',
      dailyEntry: '',
      activity: '',
      moodCount: 0,
      users: [],
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(e, { value }) {
    this.setState({
      mood: value
    })
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
    const { open } = this.state
    const { mood, dailyEntry, activity } = this.state
    const options = [
      { key: 'great', text: 'great', value: 'great' },
      { key: 'good', text: 'good', value: 'good' },
      { key: 'ok', text: 'ok', value: 'ok' },
      { key: 'sad', text: 'sad', value: 'sad' },
      { key: 'really sad', text: 'really sad', value: 'really sad' },
    ];

    return (
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
          <Form>
        <Form.Group widths='equal'>
          <Form.Select fluid label='Mood' options={options} placeholder='Mood' onChange={this.handleSelect} />
        </Form.Group>
        <Form.TextArea label='Daily Entry' name='dailyEntry' value={dailyEntry} onChange= {this.handleChange} placeholder={`Any thoughts you'd like to share?`} />
        <Form.Button>Submit</Form.Button>
      </Form>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button icon='check' content='All Done' onClick={this.close} /> */}
        </Modal.Actions>
      </Modal>
    )
  }
}

// const SemanticMoodForm = () => (

//   <Modal trigger={<Button>Start Here!</Button>}>
//     <Modal.Header>How're you feeling today?</Modal.Header>
//     <Modal.Content image>
//       <div className='image'>
//         <Image src="https://i.imgur.com/Vjft5Im.png" name="smile"/>
//       </div>
//       <br/>
//     </Modal.Content>
//     <Modal.Actions>
//       <MoodModal />
//     </Modal.Actions>
//   </Modal>
// )

export default MoodModal;
