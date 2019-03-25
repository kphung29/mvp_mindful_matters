import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      chartData: {
        labels: ['great', 'good', 'ok', 'sad', 'really sad'],
        datasets: [
          {
            label: 'Moods',
            data: [
              4,
              2,
              5,
              2,
              3,
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
    const { users } = this.state;
    return (
      <div className="chart">
        <Bar
          data={chartData}
          height={15}
          width={15}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Mood Analyzer',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
        <br />
        <br />
        <hr />
        <Line
          height={15}
          width={15}
          data={{
            labels: ['great', 'good', 'ok', 'sad', 'really sad'],
            datasets: [
              {
                label: 'Moods',
                lineTension: 0,
                borderColor: 'rgb(100,149,237',
                backgroundColor: 'rgb(255,250,250)',
                data: [
                  4,
                  2,
                  2,
                  3,
                  2
                ]
              }
            ]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
