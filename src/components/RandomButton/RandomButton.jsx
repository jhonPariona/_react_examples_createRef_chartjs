import React from "react";

function getRandInteger(max) {
  let arrayResult = [];
  for (let i = 0; i < max; i++) {
    arrayResult.push(Math.floor(Math.random() * 100));
  }
  return arrayResult;
}

class RandomButton extends React.Component {
  state = {
    data: [],
  };

  changeData = () => {
    this.setState(
      {
        data: getRandInteger(6),
      },
      () => {
        this.props.handleData(this.state.data);
      }
    );
  };

  componentDidMount() {
    this.changeData();
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <p>{data.toString()}</p>
        <button onClick={this.changeData}>Change Data</button>
      </>
    );
  }
}

export default RandomButton;
