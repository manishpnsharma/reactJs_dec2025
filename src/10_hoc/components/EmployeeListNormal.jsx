import React, { Component } from "react";
//import Comment from "./Comment";
export default class EmployeeListNormal extends React.Component {
  constructor(props) {
    super(props);
    this.refName = React.createRef();
    this.state = {
      employees: []
    }
  }

  addEmployee = (name) => {
    this.setState(prevState => {
      return { employees: [...prevState.employees, name.toUpperCase()] };
    })
  }
  render() {
    let employees = this.state.employees.map((employee, index) => (
      <li key={index}>{employee} </li>
    ))
    return (
      <>
        <h2> {this.props.heading}</h2>
        <label>
          enter employe name :
          <input type="text" ref={this.refName} ></input>
        </label>
        <button onClick={() => this.addEmployee(this.refName.current.value)}>Add Emoloyee</button>
        <ul>
          {employees}
        </ul>
      </>
    );
  }
}

