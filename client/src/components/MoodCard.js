import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const MoodCard = () => (
  <Grid textAlign='center'>
  <Card>
    <Image src='https://i.imgur.com/wquVArW.jpg' />
    <Card.Content>
      <Card.Header>Kevin</Card.Header>
      <Card.Meta>Joined in 2019</Card.Meta>
      <Card.Description>Kevin is a medical professional/software engineer in Boston.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='book' />
        10 Mood Daily Entries
      </a>
    </Card.Content>
  </Card>
  </Grid>
)

export default MoodCard;