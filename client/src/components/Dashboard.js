import React from "react";

import { Grid, Segment } from 'semantic-ui-react';

import MoodModal from './MoodModal';
import Chart from './Chart';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <br/>
      <MoodModal />
      <br />
      <Chart />
    </div>
  )
}

export default Dashboard;