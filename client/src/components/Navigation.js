import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SpotifyPlayer from 'react-spotify-player';

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
            <SpotifyPlayer
              uri="spotify:user:spotify:playlist:37i9dQZF1DWZqd5JICZI0u"
              size="compact"
              view="list"
              theme="black"
              position="right"
              autoplay="true"
            />
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