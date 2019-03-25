import React, { Component } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      chartData: {
        labels: ['happy', 'good', 'so-so', 'anxious', 'sad', 'angry'],
        datasets: [
          {
            label: 'Moods',
            data: [
              4,
              2,
              2,
              3,
              2,
              1
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
          },
        ],
      },
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
    const { chartData } = this.state;
    return (
      <Grid>
      <GridRow>
        <GridColumn width={16}>
        <Line
          height={450}
          width={450}
          data={{
            labels: ['happy', 'good', 'so-so', ,'anxious', 'sad'],
            datasets: [
              {
                label: 'Moods',
                fill: false,
                lineTension: 0,
                borderColor: 'rgb(100,149,237',
                backgroundColor: 'rgb(255,250,250)',
                data: [
                  4,
                  2,
                  2,
                  3,
                  2,
                  1,
                ]
              }
            ]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Mood Analytics',
              fontColor: 'black',
              fontSize: 45,
            },
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
            data={chartData}
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
