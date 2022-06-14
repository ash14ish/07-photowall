import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements);
    const imageLink = e.target.elements.link.value;
    const description = e.target.querySelector(".description").value;
    const post = { id: +new Date(), imageLink, description };
    if (imageLink && description) {
      this.props.addingPost(post);
      this.props.navigate("/");
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Link" name="link"></input>
        <input
          type="text"
          placeholder="Description"
          className="description"
        ></input>
        <button>Post</button>
      </form>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();
  return <Form {...props} navigate={navigate} />;
}
