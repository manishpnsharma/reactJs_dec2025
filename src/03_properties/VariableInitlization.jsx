import React from "react";
/*function OSComponet(props) {
  return (
    <>
      <h1> Oprating system : {props.os} {props.age} </h1>

      <h1> Age  :  {props.age} </h1>
      <h1> develop by   : {props.children}</h1>
    </>
  );
} */
/*
const OSComponet = ({ props }) => {
  return (
    <>
      <h1> Oprating system Arrow : {props.os} {props.age} </h1>

      <h1> Age  :  {props.age} </h1>
      <h1> develop by   : {props.children}</h1>
    </>
  );
} */

const OSComponet = ({ os, children }) => {
  return (
    <>
      <h1> Oprating system Arrow : {os} {age} </h1>

      <h1> Age  :  {age} </h1>
      <h1> develop by   : {children}</h1>
    </>
  );
}
/*
props = {
  os: "wind",
  children: "Micro"
}

var os = props.os;
var children = props.children;
var age = props.age;

var { os, children, age } = props; */

/*
props = {
os:"Windows",
age :"34",
children :"Windows_C"

} */
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