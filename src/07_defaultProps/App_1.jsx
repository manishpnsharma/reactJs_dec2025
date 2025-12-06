import React from "react";

// Functinal Component
const UserComponet = ({ name = "Mansh", project, age }) => {
  return (
    <>
      <h2>Default Propes</h2>
      <p> Name : {name}</p>
      <p>Project : {project}</p>
      <p>Project : {age}</p>
    </>
  );
}
export default class App extends React.Component {
  render() {
    return (
      <UserComponet project={["Shopping card"]} age={29}> </UserComponet>
    );
  }
}