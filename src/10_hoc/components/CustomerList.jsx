import React, { Component } from "react";
import withIteam from "./withIteam";
class CustomerList extends React.Component {

   constructor(props) {
      super(props);
      this.refName = React.createRef();
      }
render() {

  const {items,addItem,heading}=this.props;
    let itemList = items.map((item, index) => (
      <li key={index}>{item} </li>
    ))
    return (
      <>
        <h2> {heading}</h2>
        <label>
          enter Customer name :
          <input type="text" ref={this.refName} ></input>
        </label>
        <button onClick={() => addItem(this.refName.current.value)}>Add Customer HOC</button>
        <ul>
          {itemList}
        </ul>
      </>
    )
  }
}
export default withIteam(CustomerList,0)