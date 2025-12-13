import React from "react";
export default class App extends React.Component {
  add(e) {
    alert('Add'+e);
  }
  edit() {
    alert('edit');
  }
  delete() {
    alert('delete');
  }
  render() {
    return (
      <>
        <h2>composableComponents Demo</h2>
        <button onClick={() => this.add('Ram')}> Add </button>
         <button onClick={() => this.edit()}> edit </button>
          <button onClick={() => this.delete()}> delete </button>
      </>
    );
  }
}

