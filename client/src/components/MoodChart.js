import React, { Component } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { Pie, Bar } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('/posts')
    .then(res => res.json())
    .then(data => this.setState({
      users: data,
    }))
    .catch(err => console.log(err));
  }

  render() {
    const { users } = this.state;
    const happyMood = users.filter(mood => mood.mood === 'happy');
    const happyCount = happyMood.length;
    const goodMood = users.filter(mood => mood.mood === 'good');
    const goodCount = goodMood.length;
    const soSoMood = users.filter(mood => mood.mood === 'so-so');
    const soSoCount = soSoMood.length;
    const anxiousMood = users.filter(mood => mood.mood === 'anxious');
    const anxiousCount = anxiousMood.length;
    const sadMood = users.filter(mood => mood.mood === 'sad');
    const sadCount = sadMood.length;
    const angryMood = users.filter(mood => mood.mood === 'angry');
    const angryCount = angryMood.length;

    return (
      <Grid>
      <GridRow>
        <GridColumn width={16}>
        <Pie
            data={{
              labels: ['happy', 'good', 'so-so', 'anxious', 'sad', 'angry'],
              datasets: [
                {
                  label: 'Moods',
                  data: [
                    happyCount,
                    goodCount,
                    soSoCount,
                    anxiousCount,
                    sadCount,
                    angryCount
                  ],
                  backgroundColor: [
                    "#585858",
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850"
                  ],
                },
              ],
            }}
            height={450}
            width={450}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: true,
                position: 'right',
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
          />
          </GridColumn>
          <GridColumn width={16}>
          <Bar
            data={{
              labels: ['happy', 'good', 'so-so', 'anxious', 'sad', 'angry'],
              datasets: [
                {
                  label: 'Moods',
                  data: [
                    happyCount,
                    goodCount,
                    soSoCount,
                    anxiousCount,
                    sadCount,
                    angryCount
                  ],
                  backgroundColor: [
                    "#585858",
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850"
                  ],
                },
              ],
            }}
            height={450}
            width={450}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: true,
                position: 'right',
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
          />
          </GridColumn>
      </GridRow>
      </Grid>
    );
  }
}

export default Chart;
