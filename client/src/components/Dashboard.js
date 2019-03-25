import React from "react";

import MoodModal from './MoodModal';
import Chart from './Chart';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <MoodModal />
      <Chart />
    </div>
  )
}

export default Dashboard;