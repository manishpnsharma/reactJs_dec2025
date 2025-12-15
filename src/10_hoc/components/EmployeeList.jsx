import React, { Component } from "react";
import withIteam from "./withIteam";
class EmployeeList extends React.Component {

  constructor(props) {
    super(props);
    this.refName = React.createRef();
  }
  render() {

    const { items, addItem, heading } = this.props;
    let itemList = items.map((item, index) => (
      <li key={index}>{item} </li>
    ))
    return (
      <>
        <h2> {heading}</h2>
        <label>
          enter employe name :
          <input type="text" ref={this.refName} ></input>
        </label>
        <button onClick={() =>addItem(this.refName.current.value)}>Add Emoloyee HOC</button>
        <ul>
          {itemList}
        </ul>
      </>
    );
  }
}
export default withIteam(EmployeeList, 1)


