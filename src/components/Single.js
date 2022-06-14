import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
  render() {
    const path = window.location.pathname;

    const id = +path.slice(path.lastIndexOf("/") + 1);

    const post = this.props.posts.find(curr => curr.id === id);
    const comments = this.props.comments[id] || [];

    // console.log(this.props.posts);

    if (this.props.loading === true)
      return <div className="loader">Loading...</div>;
    else if (post) {
      return (
        <div className="single-photo">
          <Photo post={post} {...this.props} />
          <Comments
            addingComment={this.props.addingComment}
            comments={comments}
            id={id}
          />
        </div>
      );
    } else return <h1>no post found</h1>;
  }
}
export default Single;
