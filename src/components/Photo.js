import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

class Photo extends Component {
  render() {
    const post = this.props.post;
    const count = this.props.comments[this.props.post.id]?.length || 0;
    const description = post.description
      .trim()
      .toLowerCase()
      .split(" ")
      .map(curr => curr.replace(curr[0], curr[0].toUpperCase()))
      .join(" ");

    return (
      <figure className="figure">
        <Link to={`${post.id}`}>
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        <figcaption>
          <p>{description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              this.props.removingPost(post.id);
              this.props.navigate("/");
            }}
          >
            Remove
          </button>
          <Link to={`${post.id}`} className="button">
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {count}
            </div>
          </Link>
        </div>
      </figure>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();
  return <Photo {...props} navigate={navigate} />;
}
