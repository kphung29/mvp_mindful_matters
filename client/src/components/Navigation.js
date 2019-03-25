import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import HomePage from './HomePage';
import Dashboard from './Dashboard';
import MoodModal from './MoodModal';
import MoodHistory from './MoodHistory';

const Navigation = () => {

    return (
      <Router>
        <div>
          <Menu inverted pointing size="massive" widths={6}>
          <Menu.Item as={ Link } to='/'>Home</Menu.Item>
            <Menu.Item as={ Link } to='/dashboard'>Dashboard</Menu.Item>
            <Menu.Item as={ Link } to='/mood'>Add Entry</Menu.Item>
            <Menu.Item as={ Link } to='/history'>History</Menu.Item>
            <Menu.Item as={ Link } to='/logout' position='right'>Login/Signout</Menu.Item>
          </Menu>
          <hr/>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/mood" component={MoodModal} />
          <Route path="/history" component={MoodHistory} />
          <Route path="/logout" component={HomePage} />
        </div>
      </Router>
    )
}

export default Navigation;