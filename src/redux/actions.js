import database from "../database/config";
import { ref, set, get, remove, push } from "firebase/database";

// action creaters

export function addingPost(post) {
  return dispatch =>
    set(ref(database, "posts/" + post.id), post)
      .then(() => {
        dispatch(addPost(post));
      })
      .catch(error => {
        console.log(error);
      });
}

export function loadingPosts() {
  return dispatch =>
    get(ref(database, "posts/"))
      .then(snapshot => {
        let posts = [];
        snapshot.forEach(child => {
          posts.push(child.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch(error => {
        console.error(error);
      });
}

export function removingPost(id) {
  return dispatch => {
    remove(ref(database, `comments/` + id));
    return remove(ref(database, `posts/` + id))
      .then(() => dispatch(removePost(id)))
      .catch(error => {
        console.log(error);
      });
  };
}

export function addingComment(comment, postId) {
  return dispatch =>
    push(ref(database, "comments/" + postId), comment)
      .then(() => dispatch(addComment(comment, postId)))
      .catch(error => {
        console.error(error.message);
      });
}

export function loadingComments() {
  return dispatch =>
    get(ref(database, "comments/"))
      .then(snapshot => {
        let comments = {};
        snapshot.forEach(child => {
          comments[child.key] = Object.values(child.val());
        });
        dispatch(loadComments(comments));
      })
      .catch(error => {
        console.error(error.message);
      });
}

// load posts

export function loadPosts(posts) {
  return {
    type: "LOAD_PHOTOS",
    posts,
  };
}

// removePhoto

export function removePost(id) {
  return {
    type: "REMOVE_PHOTO",
    id,
  };
}

// addPhoto

export function addPost(post) {
  return {
    type: "ADD_PHOTO",
    post,
  };
}

// load comments

export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments,
  };
}

// addcomment

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId,
  };
}
