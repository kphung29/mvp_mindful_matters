import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Header,
  Icon,
  Segment,
  Container
} from 'semantic-ui-react'

class HomePageHeader extends Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `Dashboard`;
    this.props.history.push(path);
  }

  render() {
    return (
    <Segment inverted padded='very'>
      <Header
        content='Welcome to Mindful Matters'
        inverted
        inverted color='grey'
        textAlign='center'
        style={{
          fontSize: 65,
          paddingTop: 30,
          paddingBottom: 30
        }}
      >
      </Header>
      <hr />
      <Header
        as='h2'
        content={`The goal of Mindful Matters is help you keep track of your mood and shed light into the importance of mental wellness.`}
        inverted
        inverted color='grey'
        textAlign='center'
      />
      <Container textAlign='center'>
      <br/>
      <Button primary size='huge' onClick={this.routeChange}>
        Get Started
        <Icon name='right arrow' />
      </Button>
      </Container>
      </Segment>
    )
  }

}

export default withRouter(HomePageHeader);