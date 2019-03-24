import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'

const HomePageHeader = () => (
  <Container text>
  <Segment inverted>
    <Header
      as='h1'
      size='huge'
      content='Welcome to Mood Matters'
      inverted color='grey'
      inverted
    >
    </Header>
    <Header
      as='h2'
      content={`The goal of Mindful Matters is help you keep track of your mood and shed light into the importance of one's mental health!`}
      inverted
      inverted color='grey'
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
    </Segment>
  </Container>
)

export default HomePageHeader;