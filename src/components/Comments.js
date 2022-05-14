import React, { Component } from "react";

class Comments extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const comment = e.target.elements.comment;
    if (comment) this.props.addingComment(comment.value, this.props.id);
    comment.value = "";
    comment.blur();
  }

  render() {
    return (
      <div className="comment">
        {this.props.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="comment" name="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
export default Comments;
