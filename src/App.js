import Main from "./components/Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import * as actions from "./redux/actions";
import {
  addingPost,
  loadingPosts,
  removingPost,
  addingComment,
  loadingComments,
} from "./redux/actions";

// both functions are for sending state and actions as a props

function mapStateToProps(state) {
  return {
    posts: [...state.posts],
    comments: state.comments,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch);
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addingPost,
      loadingPosts,
      removingPost,
      addingComment,
      loadingComments,
    },
    dispatch
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
