import React from "react";
import Chart from "chart.js/auto";

class Bar extends React.Component {
  canvasRef = React.createRef(null);
  createBar = () => {
    const ctx = this.canvasRef.current.getContext("2d");
    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: this.props.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  componentDidMount() {
    if (this.canvasRef) {
      this.createBar();
      this.chart.canvas.parentNode.style.height = "500px";
      this.chart.canvas.parentNode.style.width = "500px";
    }
  }

  componentDidUpdate() {
    this.chart.data.datasets[0].data = this.props.data;
    this.chart.update();
  }

  render() {
    return (
      <>
        <h1>Bar chart</h1>
        <canvas width="100" height="100" ref={this.canvasRef}></canvas>
      </>
    );
  }
}
export default Bar;
