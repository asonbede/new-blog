import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import blogReducer from "./reducers/blogReducer";
// import oneBlogReducer from "./reducers/oneBlogReducer";
import usersReducer from "./reducers/usersReducer";
import allUsersReducer from "./reducers/allUsersReducer";
import reRenderReducer from "./reducers/trigarRender";
import messageReducer from "./reducers/messageReducer";
//import commentUpdateReducer from "./reducers/commentUpdateReducer";
import commentUpdateReducer from "./reducers/commentUpdate";
import radioButtonNameValueReducer from "./reducers/radioButtonNameValueReducer";
import resultReducer from "./reducers/resultReducer";

// import singleUserReducer from "./reducers/singleUserReducer";
//import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  blogs: blogReducer,
  // oneBlog: oneBlogReducer,
  logInUser: usersReducer,
  allUsers: allUsersReducer,
  trigarRender: reRenderReducer,
  message: messageReducer,
  updateState: commentUpdateReducer,
  radioNameValue: radioButtonNameValueReducer,
  resultState: resultReducer,
  // updateHandle: commentUpdateReducer,
  //  singleUser: singleUserReducer

  //filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
