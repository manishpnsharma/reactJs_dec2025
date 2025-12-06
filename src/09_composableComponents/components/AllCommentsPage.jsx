import React from "react";

import CommentList from "./CommentList";

import CommentApi from "../data/CommentApi";

export default class AllComponentsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  componentDidMount() {

    this.setState({ comments: CommentApi.getAllComments() })
  }
  render() {
    return (
      <>
        <h2>All Components </h2>
        <CommentList mycomments={this.state.comments} />
      </>
    );
  }
}

