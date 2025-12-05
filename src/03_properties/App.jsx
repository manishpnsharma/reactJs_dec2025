//import React from "react"
import React from "react";
class OSComponet extends React.Component {
  // <React.Fragment>  // remove invated reating code
  render() {
    console.log(this.props.os);
    var vagg = 9;
    let mylet = 87;
    return (
      <>
        <h1> vagg : {vagg} </h1>
        <h1> mylet : {mylet} </h1>
        <h1> Oprating system : {this.props.os} {this.props.age}  {mylet}</h1>

        <h1> Age  :  {this.props.age} </h1>
        <h1> develop by   : {this.props.children}</h1>
      </>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
      < >
        <OSComponet os="Windows" age={46}>Windows_C </OSComponet>
        <OSComponet os="apple" >apple_C </OSComponet>
      </ >
    );
  }
}