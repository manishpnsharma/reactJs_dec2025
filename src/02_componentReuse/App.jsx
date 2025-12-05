//import React from "react"
import React from "react";

class WelcomeComponet extends React.Component {
  // <React.Fragment>  // remove invated reating code
  render() {
    return (
      <React.Fragment>
        <h1>01 Welcome wecome </h1>
      </React.Fragment>
    );
  }
}

export default class App extends React.Component {
  //class App extends React.Component{
  render() {
    return (
      <React.Fragment>
        <WelcomeComponet />
        <WelcomeComponet />
        <WelcomeComponet />
      </React.Fragment>
    );
  }
}