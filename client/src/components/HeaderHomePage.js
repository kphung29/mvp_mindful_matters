import React from 'react';
import {
  Button,
  Header,
  Icon,
  Segment,
  Container
} from 'semantic-ui-react'

const HomePageHeader = () => (
  <Segment inverted padded='very'>
    <Header
      as='h1'
      size='huge'
      content='Welcome to Mood Matters'
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
      content={`The goal of Mindful Matters is help you keep track of your mood and shed light into the importance of one's mental health!`}
      inverted
      inverted color='grey'
      textAlign='center'
    />
    <Container textAlign='center'>
    <br/>
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
    </Container>
    </Segment>
)

export default HomePageHeader;