import React from "react";
import Comment from "./Comment";


// new code

export default class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.comments && this.props.comments.map(comment => (
      <Comment 
    key={comment.id} 
    id={comment.id} 
    issuedescription={comment.issuedescription}
    severity={comment.severity}
    status={comment.status} 
  />
));


    
    return (
      <>
        <table>
          <thead>
            <tr>
              <th> ID</th>
              <th> Issue Description</th>
              <th> Severity</th>
              <th> Status</th>
            </tr>
          </thead>
          <tbody>
            {commentNodes}
          </tbody>
        </table>
      </>
    );
  }
}

