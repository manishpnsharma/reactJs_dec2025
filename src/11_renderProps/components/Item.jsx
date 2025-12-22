import React, { component } from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] }
  }
  addItem = (itemName) => {
    this.setState(prevState => {
      return { items: [...prevState.items, this.props.isUpper ? itemName.toUpperCase() : itemName] };
    })
  }
  render() {
    return (
      <>
        {this.props.render(this.state.items, this.addItem)}
      </>
    )
  }
}

export default Item