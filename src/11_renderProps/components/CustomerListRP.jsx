import React, { Component } from "react";
class CustomerListRP extends React.Component {
  constructor(props) {
    super(props);
    this.refName = React.createRef();
  }
  render() {
    const { items, addItem } = this.props;
    let itemList = items.map((item, index) => (
      <li key={index}>{item} </li>
    ))
    return (
      <>
        <h2> {this.props.heading}</h2>
        <label>
          Enter Customer name :
          <input type="text" ref={this.refName} ></input>
        </label>
        <button onClick={() => addItem(this.refName.current.value)}>Add Customer (RP)</button>
        <ul>
          {itemList}
        </ul>
      </>
    )
  }
}
export default CustomerListRP ;