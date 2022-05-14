import { combineReducers } from "redux";

function comments(state = {}, action) {
  // console.log(action);
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postId])
        return { ...state, [action.postId]: [action.comment] };
      else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment],
        };
      }
    case "LOAD_COMMENTS":
      return action.comments;
    default:
      return state;
  }
}

function posts(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case "REMOVE_PHOTO":
      return state.filter((curr) => curr.id !== action.id);
    case "ADD_PHOTO":
      return [action.post, ...state];
    case "LOAD_PHOTOS":
      return action.posts;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
