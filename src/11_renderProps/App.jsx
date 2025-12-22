import React, { Component } from 'react';
import CustomerList from './components/CustomerListRP'
import EmployeeList from './components/EmployeeListRP'
import Item from './components/Item';
class App extends Component {
  render() {
    return (
      <>
        <Item isUpper={true} render={(items, addItem) => (
          <EmployeeList items={items} addItem={addItem} heading="Employee List" />
        )}></Item>
        <Item render={(items, addItem) => (
          <CustomerList items={items} addItem={addItem} heading="Customer List " />
        )}></Item>
      </>
    )
  }
}
export default App