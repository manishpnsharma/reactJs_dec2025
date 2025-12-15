import React, { component } from "react";

const withItem = (WrappedComponent, toUpper) => {
  class WithItemComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [] }
    }
    addItem = (itemName) => {
      this.setState(prevState => {
        return { items: [...prevState.items, toUpper ? itemName.toUpperCase() : itemName] };
      })
    }
    render() {
      return (
        <WrappedComponent
          items={this.state.items}
          addItem={this.addItem}
          {...this.props} />
      )
    }
  }
  return WithItemComp;
}
export default withItem