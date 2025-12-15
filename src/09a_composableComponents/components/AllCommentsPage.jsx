import React from "react";
import CommentList from "./CommentList";
import CommentApi from "../data/CommentApi";
import { data } from "react-router-dom";
export default class AllCommentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }
  /*
  async componentDidMount() {
    const data = await CommentApi.getAllComments();
    this.setState({ comments: data });
  }
    */

  componentDidMount() {
    CommentApi.getAllComments()
      .then(data => this.setState({ comments: data }))
  }
  render() {
    return (
      <>
        <h1>All Components </h1>
        <CommentList comments={this.state.comments} />
      </>
    );
  }
}

