import React from "react";

import { Bar, RandomButton } from "./components";

class App extends React.Component {
  state = {
    data: [],
  };

  handleData = (randomData) => {
    this.setState({
      data: randomData,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>Random Chart.js</h1>
        <RandomButton handleData={this.handleData} />
        <Bar data={data} />
      </>
    );
  }
}

export default App;
