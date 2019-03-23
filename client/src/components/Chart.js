import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['great', 'good', 'ok', 'sad', 'really sad'],
        datasets: [
          {
            label: 'Moods',
            data: [
              2,
              4,
              1,
              0,
              2,
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

  render() {
    const { chartData } = this.state;
    return (
      <div className="chart">
        <Bar
          data={chartData}
          width={125}
          height={125}
          options={{
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
        <Line
          data={chartData}
          width={30}
          height={30}
          options={{
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
