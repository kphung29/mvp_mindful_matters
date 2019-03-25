import React from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

import MoodModal from './MoodModal';
import Chart from './MoodChart';
import MoodCard from './MoodCard';

const Dashboard = () => {
  return (
    <div>
    <Grid style={{ paddingLeft: 20 }} columns={2} celled>
      <GridRow>
        <GridColumn width={3} textAlign='center'>
          <MoodCard />
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

export default Dashboard;