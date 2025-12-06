//import React from "react"
import React from "react";
class UserComponet extends React.Component {
  render() {
    return (
      <>
        <h1>defaultProps</h1>
        <p> Name :{this.props.name}</p>
        <p> Project :{this.props.project}</p>
        <p> age :{this.props.age / 5}</p>
      </>
    );
  }
}

/*
UserComponet.propTypes  = {
  name: PropTypes.string,
  project: PropTypes.array,
  age: PropTypes.number
};
 */
UserComponet.defaultProps = {
  name: "Vinay"
}; 

/*
const UserComponet = ({ name = "Vinay", project, age }) => {
  //export default class App extends React.Component {
  //class App extends React.Component{
  
    return (
      <>
        <h2>Default Propes</h2>
        <p> Name : {name}</p>
        <p>Project : {project}</p>
      </>
    );
   
} */

export default class App extends React.Component {

  render() {
    return (

      /*<UserComponet name={"Test"} project={["Shopping card"]} age={29}> </UserComponet> */

      <UserComponet  project={["Shopping card"]} age={29}> </UserComponet>
    );
  }
}