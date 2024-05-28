
/* eslint-disable react-refresh/only-export-components */

import React, { useContext, createContext, useReducer } from "react";
import { CommentDispatch, CommentState, initialState } from "./types";
import { commentReducer } from "./reducer";

const CommentStateContext = createContext<CommentState>(initialState);
const CommentDispatchContext = createContext<CommentDispatch>(() => {});

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  return (
    <CommentStateContext.Provider value={state}>
        <CommentDispatchContext.Provider value={dispatch}>
            {children}
        </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  )
};

export const useCommentsState = () =>useContext(CommentStateContext)
export const useCommentDispatch = () =>useContext(CommentDispatchContext)