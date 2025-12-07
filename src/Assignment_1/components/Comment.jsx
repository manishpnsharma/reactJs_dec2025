import React from "react";
// new code
export default class Comment extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.id}
        </td>
        <td>
          {this.props.issuedescription}
        </td>
        <td>
          {this.props.severity}
        </td>
        <td>
          {this.props.status}
        </td>
      </tr>
    );
  }
}