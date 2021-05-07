import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import blogReducer from "./reducers/blogReducer";
// import oneBlogReducer from "./reducers/oneBlogReducer";
import usersReducer from "./reducers/usersReducer";
import allUsersReducer from "./reducers/allUsersReducer";
import reRenderReducer from "./reducers/trigarRender";
import messageReducer from "./reducers/messageReducer";
// import singleUserReducer from "./reducers/singleUserReducer";
//import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  blogs: blogReducer,
  // oneBlog: oneBlogReducer,
  logInUser: usersReducer,
  allUsers: allUsersReducer,
  trigarRender: reRenderReducer,
  message: messageReducer,
  //  singleUser: singleUserReducer

  //filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
