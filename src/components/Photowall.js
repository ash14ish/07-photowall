import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {
    return (
      <div>
        <Link className="addIcon" to="addPhoto"></Link>

        <div className="photoGrid">
          {this.props.posts
            .sort((a, b) => -(a.id - b.id))
            .map(post => (
              <Photo key={post.id} post={post} {...this.props} id={post.id} />
            ))}
        </div>
      </div>
    );
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
