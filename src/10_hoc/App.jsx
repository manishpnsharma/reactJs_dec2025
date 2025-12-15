import React, { Component } from 'react';

import EmployeeListNormal from './components/EmployeeListNormal'
import CustomerListNormal from './components/CustomerListNormal'
//import EmployeeLisHOC from './components/EmployeeList'
//import CustomerLisHOC from './components/CustomerList'

class App extends Component {
  render() {
    return (
      <>
        <EmployeeListNormal heading="Employee List (normal)" />
        <CustomerListNormal heading="Customer List (Normal)" />
      </>

    )
  }
}

export default App