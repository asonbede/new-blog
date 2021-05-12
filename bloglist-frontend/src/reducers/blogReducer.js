import blogService from "../services/blogs";
import { trigerRender } from "./trigarRender";
import { renderMessage } from "./messageReducer";

// const initialState = [
//   {
//     content: "reducer defines how redux store works",
//     important: true,
//     id: 1,
//   },
//   { content: "state of store can contain any data", important: false, id: 2 },
// ];

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      //return state.concat(action.data);
      return [...state, action.data];
    case "INIT_BLOGS":
      return action.data;
    case "DELETE_BLOG":
      // return   state.filter((blog)=>blog.id!==action.id)
      return action.data;

    case "NEW_NOTE":
      return state.concat(action.data);

    case "CREATE_COMMENT":
      // window.location.reload()

      return state.filter((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "CREATE_LIKE":
      // window.location.reload()

      return state.filter((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "CLOSE_DETAILS":
      return action.data;

    default:
      return state;
  }
};

//const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    data: { id },
  };
};

// export const initializeNotes = (notes) => {
//   return {
//     type: "INIT_NOTES",
//     data: notes,
//   };
// };

export const initializeBlogs = () => {
  let blogs;
  return async (dispatch) => {
    try {
      blogs = await blogService.getAll();
    } catch (error) {
      console.log("error occured while getting all");
      console.log({ blogs }, "initialize blog");
    }

    dispatch({
      type: "INIT_BLOGS",
      data: blogs ? blogs : [],
    });
  };
};

export const removeBlogHandler = (id) => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    const blogObject = blogs.find((blog) => blog.id === id);
    const confirmResult = window.confirm(
      `Do you really want to delete blog with title ${blogObject.title} from database/server`
    );
    if (!confirmResult) {
      return;
    }
    blogService
      .deleteBlog(id)
      .then((returnedNote) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        dispatch({
          type: "DELETE_BLOG",
          data: newBlogs,
        });
      })
      .catch((error) => console.log("blog not deleted"));
  };
};

export const createBlog = (content) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.create(content);
      dispatch({
        type: "NEW_NOTE",
        data: newBlog,
      });
      dispatch(
        renderMessage({
          type: "success",
          message: "Blog creation was successful",
        })
      );
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: "Blog creation was not successful",
        })
      );
    }
    //noteFormRef.current.togglevisibility();
  };
};
// export const controlUseEffectRerender = () => {
//   return !true;
// };
const scrollToElement = () => {
  document.getElementById("noteti").scrollIntoView();
};

export const handleComment = (id, content, operationType) => {
  let successMessage;
  let failureMessage;

  if (operationType === "delete") {
    successMessage = "Comment deletion was successful";
    failureMessage = "Comment deletion was not successful";
  } else if (operationType === "create") {
    successMessage = "Comment creation was successful";
    failureMessage = "Comment creation was not successful";
  } else if (operationType === "update") {
    successMessage = "Comment update was successful";
    failureMessage = "Comment update was not successful";
  } else if (operationType === "like") {
    successMessage = "Comment like operation was successful";
    failureMessage = "Comment like operation was not successful";
  } else if (operationType === "reply-create") {
    successMessage = "Comment-create-reply operation was successful";
    failureMessage = "Comment-create-reply operation was not successful";
  } else if (operationType === "update-reply") {
    successMessage = "Comment-reply-update operation was successful";
    failureMessage = "Comment-reply-update operation was not successful";
  } else if (operationType === "like-reply") {
    successMessage = "Like-reply operation was successful";
    failureMessage = "Like-reply operation was not successful";
  } else if (operationType === "dis-like-reply") {
    successMessage = "Dis-Like-reply operation was successful";
    failureMessage = "Dis-Like-reply operation was not successful";
  } else if (operationType === "delete-comment-reply") {
    successMessage = "Delete-comment-reply operation was successful";
    failureMessage = "Delete-comment-reply operation was not successful";
  }

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "CREATE_COMMENT",
        data: response,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
    }
    //controlUseEffectRerender();
  };
};

export const likeHandler = (id, content) => {
  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    const response = await blogService.update(id, content);

    dispatch(trigerRender());
    console.log({ response });
    dispatch({
      type: "CREATE_LIKE",
      data: response,
    });
  };
};

// export const handleBlogdetailsClose = () => {
//   console.log("ondetailclose");
//   return {
//     type: "CLOSE_DETAILS",
//     data: null,
//   };
// };

export default blogReducer;
