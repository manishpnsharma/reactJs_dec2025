import React from "react"
export default class State_05 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Demo here...",
      empName: "Ram",
      bManager: true
    };
  }
  handleTextInput(e) { this.setState({ empName: e.target.value }) }
  handleCheckbox() { this.setState((prevState) => ({ bManager: !prevState.bManager })); }
  render() {
    let role = this.state.bManager ? " Manager " : "Employee";
    return (
      <>
        <h2>Demo here</h2>
        <div>
          <label>
            Name :
            <input type="test" onInput={(e) => this.handleTextInput(e)} defaultValue={this.state.empName}></input>
          </label>
          <label>
            <input type="checkbox" onChange={() => this.handleCheckbox()} defaultChecked={this.state.bManager}></input>
            Manager :
          </label>

          <h2>{this.state.empName}</h2>
        </div>
        <p>{this.state.empName} is {role}</p>
      </>
    )
  }
}