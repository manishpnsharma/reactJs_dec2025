import React, { Component } from 'react';

//import EmployeeListNormal from './components/EmployeeListNormal'
//import CustomerListNormal from './components/CustomerListNormal'
import EmployeeListHOC from './components/EmployeeList'
import CustomerListHOC from './components/CustomerList'

class App extends Component {
  /*<EmployeeListNormal heading="Employee List (normal)" />
       <CustomerListNormal heading="Customer List (Normal)" /> */
  render() {
    return (
      <>
        <EmployeeListHOC heading="Employee List (HOC)" />
        <CustomerListHOC heading="Customer List (HOC)" />
      </>

    )
  }
}

export default App