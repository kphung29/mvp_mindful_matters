import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from './Dashboard';
import MoodModal from './MoodModal';
import Chart from './Chart';
import MoodHistory from './MoodHistory';

const Navigation = (props) => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/mood'>Add Entry</Link>
          </li>
          <li>
            <Link to='/chart'>Chart</Link>
          </li>
          <li>
            <Link to='/history'>History</Link>
          </li>
        </ul>
        <hr/>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/mood" component={MoodModal} />
        <Route path="/chart" component={Chart} />
        <Route path="/history" component={MoodHistory} />
      </div>
    </Router>
  )
}

export default Navigation;