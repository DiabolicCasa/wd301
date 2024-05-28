import { Reducer } from "react";
import { CommentActions, CommentAvailableActions, CommentState } from "./types";

export const commentReducer : Reducer<CommentState, CommentActions> = (
  state: CommentState,
  action: CommentActions
) => {
  switch (action.type) {
    case CommentAvailableActions.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true, isError: false, errorMessage: "" };
    case CommentAvailableActions.FETCH_COMMENTS_SUCCESS:
      console.log("Reducer Called")
      return { ...state, isLoading: false, comments: action.payload };
    case CommentAvailableActions.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentAvailableActions.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true, isError: false, errorMessage: "" };
    case CommentAvailableActions.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CommentAvailableActions.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
