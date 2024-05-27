import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, ProjectsState, ProjectsActions } from "./reducer";
const ProjectsStateContext = createContext<ProjectsState | undefined>(undefined);
type ProjectsDispatch = React.Dispatch<ProjectsActions>;


// Next, I'll define our ProjectsProvider component, and make this 
// ProjectsStateContext available using context Provider.

const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(undefined);
export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};

export const useProjectsState = () => useContext(ProjectsStateContext);
export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);
