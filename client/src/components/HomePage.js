import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  GridColumn,
} from 'semantic-ui-react'

import HeaderHomePage from './HeaderHomePage';

const HomePage = () => {

  return (
  <div>
   <HeaderHomePage />
   <Segment>
     <Grid container stackable verticalAlign='middle' style={{ height: '100vh'}}>
       <Grid.Row>
         <Grid.Column width={8}>
           <Header as='h3' style={{ fontSize: '3em', paddingTop: '50' }} textAlign='center'>
           Keep track of your well-being!
           </Header>
           <p style={{ fontSize: '1.4em' }}>
           Here, you can log your daily mood,  activities, and any notes you want to jot down.    Your account is private and you'll be able to keep track of the common moods and habits to better understand how you're feeling and the potential triggers that can affect your mood.
           </p>
           <Header as='h3' style={{ fontSize: '2em' }} textAlign='center'>
             Look for mood patterns and gain better insight to your daily routines!
           </Header>
           <p style={{ fontSize: '1.4em' }}>
             Data analytics and a history of of all your mood entries all in one place.
           </p>
         </Grid.Column>
         <GridColumn width={8}>
           <Image src="https://avbfb.org/wp-content/uploads/2019/02/Concept-mental-health.png" size='massive' />
         </GridColumn>
       </Grid.Row>
     </Grid>
   </Segment>
   <Segment style={{ padding: '0em' }} vertical>
     <Grid celled='internally' columns='equal' stackable>
       <Grid.Row textAlign='center'>
         <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }} color='black'>
           <Header as='h3' style={{ fontSize: '2em' }} inverted color='grey'>
             "Thanks to Mindful Matters, I am less stressed and spending more time with my baby!"
           </Header>
           <p style={{ fontSize: '1.33em' }}>
            <b>Randy Thomas</b> Newbie Father
          </p>
         </Grid.Column>
         <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }} color='black'>
           <Header as='h3' style={{ fontSize: '2em' }} inverted color='grey'>
             "I am more conscious about exercising instead of watching Youtube videos."
           </Header>
           <p style={{ fontSize: '1.33em' }}>
             <b>Joe Boulos</b> Software Engineer
           </p>
         </Grid.Column>
       </Grid.Row>
     </Grid>
   </Segment>
   <Segment style={{ padding: '8em 0em' }} vertical>
     <Container text>
       <Header as='h3' style={{ fontSize: '2em' }} textAlign='center'>
         Snapshot of a daily entry
       </Header>
       <hr/>
       <Image src="https://i.imgur.com/phjdDX4.png?2" />
       <Divider
         as='h4'
         className='header'
         horizontal
         style={{ margin: '3em 0em', textTransform: 'uppercase' }}
       >
         <a href='#'>Case Study</a>
       </Divider>
       <Header as='h3' style={{ fontSize: '2em' }} textAlign='center'>
         Created by Health Professionals
       </Header>
       <p style={{ fontSize: '1.33em' }}>
       Mood diaries are frequently recommended by psychologists and therapists to help us discover facts about ourselves that otherwise may slip our attention.  It is recommended to submit mood entries 2-3 times a day.
       </p>
       <Container textAlign='center'>
       <Button primary as='a' size='massive'>
         Join Now
       </Button>
       </Container>
     </Container>
   </Segment>
   <Segment inverted vertical style={{ padding: '5em 0em' }}>
     <Container>
       <Grid divided inverted stackable>
         <Grid.Row>
           <Grid.Column width={3}>
             <Header inverted as='h4' content='About' />
             <List link inverted>
               <List.Item as='a'>Home</List.Item>
               <List.Item as='a'>Contact Us</List.Item>
             </List>
           </Grid.Column>
         </Grid.Row>
       </Grid>
     </Container>
   </Segment>
 </div>
  )
}

export default HomePage;