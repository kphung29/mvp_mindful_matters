import React, { Component } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

import MoodModal from './MoodModal';
import Chart from './MoodChart';
import MoodCard from './MoodCard';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
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
      <Grid style={{ paddingLeft: 20 }} columns={2} celled>
        <GridRow>
          <GridColumn width={3} textAlign='center'>
            <MoodCard users={users}/>
            <br/>
            <br/>
            <MoodModal />
          </GridColumn>
          <GridColumn width={13}>
            <Chart />
          </GridColumn>
        </GridRow>
      </Grid>
      </div>
    )
  }
}

export default Dashboard;