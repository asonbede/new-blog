import usersService from "../services/users";
import { renderMessage } from "./messageReducer";
const allUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_USER":
      console.log("ccccccc");

      return action.data;

    case "DELETE_USER":
      console.log("ccccccc");
      return action.data;

    case "NEW_USER":
      console.log("ccccccc");
      return state.concat(action.data);

    default:
      return state;
  }
};

export const getAllUsers = (content) => {
  return async (dispatch) => {
    let users;
    //const newNote = awaitblogService.createNew(content);
    console.log({ users }, " in all userss");
    try {
      users = await usersService.getAll();
      dispatch({
        type: "GET_ALL_USER",
        data: users,
      });
      localStorage.setItem("allBlogUsers", JSON.stringify(users));
    } catch (error) {
      console.log({ users }, " in geting all userss");
      users = JSON.parse(localStorage.getItem("allBlogUsers"));

      if (users) {
        dispatch({
          type: "GET_ALL_USER",
          data: users,
        });
      } else {
        dispatch({
          type: "GET_ALL_USER",
          data: [],
        });
        localStorage.setItem("allBlogUsers", JSON.stringify([]));
      }
    }
  };
};

export const createUser = (content) => {
  return async (dispatch) => {
    try {
      const newUser = await usersService.create(content);
      dispatch({
        type: "NEW_USER",
        data: newUser,
      });
      dispatch(
        renderMessage({
          type: "success",
          message: "User creation was successful",
        })
      );
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: "User creation was not successful ",
        })
      );
    }
  };
};

export const removeUserHandler = (id) => {
  return async (dispatch) => {
    const users = await usersService.getAll();
    const userObject = users.find((user) => user.id === id);
    const confirmResult = window.confirm(
      `Do you really want to delete blog with title ${userObject.username} from database/server`
    );
    if (!confirmResult) {
      return;
    }
    usersService
      .deletePerson(id)
      .then((returnedNote) => {
        const newUsers = users.filter((user) => user.id !== id);
        dispatch({
          type: "DELETE_USER",
          data: newUsers,
        });
      })
      .catch((error) => console.log("user not deleted"));
  };
};

export default allUsersReducer;
