import React from 'react'
import { Header, Image, Container } from 'semantic-ui-react'

const DashBoardHeader = () => (
  <Container>
  <Header as='h2' size='huge' floated='left'>
    <Image circular src='https://i.imgur.com/z96cGzd.png' /> Kevin
  </Header>
  </Container>
)

export default DashBoardHeader;