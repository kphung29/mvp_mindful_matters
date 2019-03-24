import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Dashboard from './Dashboard';
import MoodModal from './MoodModal';
import Chart from './Chart';
import MoodHistory from './MoodHistory';
import HomePage from './HomePage';

const Navigation = () => {

    return (
      <Router>
        <div>
          <Menu pointing size="massive">
            <Menu.Item as={ Link } to='/dashboard'>Dashboard</Menu.Item>
            <Menu.Item as={ Link } to='/mood'>Add Entry</Menu.Item>
            <Menu.Item as={ Link } to='/chart'>Chart</Menu.Item>
            <Menu.Item as={ Link } to='/history'>History</Menu.Item>
          </Menu>
          <hr/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/mood" component={MoodModal} />
          <Route path="/chart" component={Chart} />
          <Route path="/history" component={MoodHistory} />
        <HomePage />
        </div>
      </Router>
    )
}

export default Navigation;