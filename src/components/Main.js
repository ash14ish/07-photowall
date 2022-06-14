import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

import PhotoWall from "./Photowall";
import Form from "./Form";
import Single from "./Single";

// import { removePost } from "../redux/actions";

export default class extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.loadingPosts().then(() => this.setState({ loading: false }));
    this.props.loadingComments();
  }

  render() {
    // console.log(this.props);
    return (
      <Router>
        <h1>
          <Link to="/">Photo Wall</Link>
        </h1>
        <Routes>
          <Route exact path="/" element={<PhotoWall {...this.props} />} />
          <Route exact path="/addPhoto" element={<Form {...this.props} />} />
          <Route
            exact
            path="/:id"
            element={<Single loading={this.state.loading} {...this.props} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   // console.log(this.props.dispatch(removePost(1)).index);
  //   // console.log(this.props.dispatch(removePost(1)).type);
  //   // console.log({ ...this.props });
  //   // console.log(this.props.removePost(1).index);
  //   // console.log(this.props.removePost(1).type);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentWillUpdate");
  //   console.log(prevState);
  // }
}
