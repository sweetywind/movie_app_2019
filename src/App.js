import React from "react";

class App extends React.Component {
  state = {
    conut: 0,
  };
  add = () => {
    this.setState((current) => ({ conut: current.conut + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ conut: current.conut - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.conut}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
