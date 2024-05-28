import { API_ENDPOINT } from "../../config/constants";
import {  CommentAvailableActions, CommentDispatch } from "./types";

export const fetchComments = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableActions.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    // extract the response body as JSON data
    const data = await response.json();
    console.log(data);
    dispatch({
      type: CommentAvailableActions.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
    console.dir(data);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableActions.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};

export const addComment = async (
    dispatch: CommentDispatch,
    projectID: string,
    taskID: string,
    newComment: string
  ) => {
    const token = localStorage.getItem("authToken") ?? "";
  
    const user= JSON.parse(localStorage.getItem("userData") || "")
    try {
      dispatch({ type: CommentAvailableActions.CREATE_COMMENT_REQUEST });
  
      const response = await fetch(
        `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ description: newComment ,owner : user.id}),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
  
      // Extract the response body as JSON data
    //   const data: AddCommentResponse = await response.json();
  
      dispatch({
        type: CommentAvailableActions.CREATE_COMMENT_SUCCESS,
        // payload: data,
      });
      fetchComments(dispatch,projectID,taskID);
    } catch (error) {
      console.error("Operation failed:", error);
      dispatch({
        type: CommentAvailableActions.CREATE_COMMENT_FAILURE,
        payload: "Unable to add comment",
      });
    }
  };