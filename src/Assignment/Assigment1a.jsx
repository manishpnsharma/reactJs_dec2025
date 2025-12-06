import React, { useState } from 'react';


class Counter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter Demo </h1>
        <h2>Counter : {this.state.count}</h2>
         <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
} export default Counter2;