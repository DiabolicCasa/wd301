import React, { Suspense, useEffect } from "react";

import MemberListItems from "./MemberListItems";
import { useMembersDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";


const MemberList: React.FC = () => {
  // I'll define a new constant called dispatchProjects,
  // to call the useProjectsDispatch() hook.
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    // And I'll pass the `dispatchProjects` to `fetchProjects` function.
    fetchMembers(dispatchMembers);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
         from our app-state, to a new component ProjectListItems */}
         <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
         <MemberListItems />
         </Suspense>
      
    </div>
  );
};
export default MemberList;
