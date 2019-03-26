import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class MoodCard extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `history`;
    this.props.history.push(path);
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
      <Grid textAlign='center'>
      <Card>
        <Image src='https://s3.amazonaws.com/moodappmvp/profile.jpg' />
        <Card.Content>
          <Card.Header>Kevin</Card.Header>
          <Card.Meta>Joined in 2019</Card.Meta>
          <Card.Description>Kevin is a medical professional/software engineer in Boston.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a onClick={this.routeChange}>
            <Icon name='book' />
            {users.length} Total Mood Entries
          </a>
        </Card.Content>
      </Card>
      </Grid>
    )
  }
}

export default withRouter(MoodCard);