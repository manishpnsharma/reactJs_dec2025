import React from "react";

import Comment from "./Comment";

export dafault class CommentList extends React.Component {

  render() {
    let commentNodes = this.props.comments && this.props.comments.map(comment => (

      <Comment key={this.props.comment.id} author={comment.author}>
        {comment.text}
      </Comment>
    ));
    return (
      <>
        <table>
          <thead>
            <tr>
              <th> Author</th>
              <th> coments</th>
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

