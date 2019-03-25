import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import SpotifyPlayer from 'react-spotify-player';

import HomePage from './HomePage';
import Dashboard from './Dashboard';
import MoodHistory from './MoodHistory';
import MoodBlog from './MoodBlog';

const Navigation = () => {

    return (
      <Router>
        <div>
          <Menu inverted pointing size="massive" widths={6}>
          <Menu.Item as={ Link } to='/'>Home</Menu.Item>
            <Menu.Item as={ Link } to='/dashboard'>Dashboard</Menu.Item>
            <Menu.Item as={ Link } to='/history'>History</Menu.Item>
            <Menu.Item as={ Link } to='/blog'>Blog</Menu.Item>
            <SpotifyPlayer
              uri="spotify:user:spotify:playlist:37i9dQZF1DWZqd5JICZI0u"
              size="compact"
              view="list"
              theme="black"
              position="right"
            />
            <Menu.Item as={ Link } to='/logout' position='right'>Logged in : Kevin</Menu.Item>
          </Menu>
          <hr/>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/history" component={MoodHistory} />
          <Route path="/blog" component={MoodBlog} />
          <Route path="/logout" component={HomePage} />
        </div>
      </Router>
    )
}

export default Navigation;