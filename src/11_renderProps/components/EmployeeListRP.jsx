import React, { Component } from "react";
class EmployeeListRP extends React.Component {
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
          Enter employe name :
          <input type="text" ref={this.refName} ></input>
        </label>
        <button onClick={() => addItem(this.refName.current.value)}>Add Emoloyee (RP)</button>
        <ul>
          {itemList}
        </ul>
      </>
    );
  }
}
export default EmployeeListRP ;


