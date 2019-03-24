import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class MoodHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
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
      <div>
        <h1>Mood History</h1>
        {users.map(user =>
        <List key={user._id} size="massive">
        <List.Item>
          <List.Icon name='calendar alternate outline' />
          <List.Content>{user.date}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='smile outline' />
          <List.Content>{user.mood}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='bicycle' />
          <List.Content>{user.activity}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='book' />
          <List.Content>{user.dailyEntry}</List.Content>
        </List.Item>
        <hr/>
        </List>
        )}
      </div>
    )
  }
}

export default MoodHistory;