export interface User {
  name: string;
  email: string;
  id: number;
}

export interface Comment {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  task_id: number;
  owner: number;
  User: User;
}

export interface CommentState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  comments: Comment[];
}

export interface AddCommentResponse {
  id: number;
  description: string;
  owner: number;
  task_id: number;
  updatedAt: string;
  createdAt: string;
}


export const initialState: CommentState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  comments: [],
};

export enum CommentAvailableActions {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentActions =
  | { type: CommentAvailableActions.FETCH_COMMENTS_REQUEST }
  | { type: CommentAvailableActions.FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: CommentAvailableActions.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentAvailableActions.CREATE_COMMENT_REQUEST }
  | { type: CommentAvailableActions.CREATE_COMMENT_SUCCESS }
  | { type: CommentAvailableActions.CREATE_COMMENT_FAILURE; payload: string };

export type CommentDispatch = React.Dispatch<CommentActions>;
