import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MembersState, MembersActions } from "./reducer";
const MembersStateContext = createContext<MembersState | undefined>(undefined);
type Membersdispatch = React.Dispatch<MembersActions>;


// Next, I'll define our ProjectsProvider component, and make this 
// ProjectsStateContext available using context Provider.

const MembersDispatchContext = createContext<Membersdispatch | undefined>(undefined);
export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);
