//import React from "react"
import React from "react";


// Maintaing UI state data was possible only in  Class React


class WelcomeComponet extends React.Component {
  // <React.Fragment>  // remove invated reating code
  render() {
    return (
      <React.Fragment>
        <h1>02_componentReuse</h1>
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