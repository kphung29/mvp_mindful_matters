import React from "react";

import MoodModal from './MoodModal';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div>
      <MoodModal />
      <Chart />
    </div>
  )
}

export default Dashboard;