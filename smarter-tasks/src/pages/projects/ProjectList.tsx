import React, { Suspense } from "react";
import ProjectListItems from "./ProjectListItems";

const ProjectList: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
         from our app-state, to a new component ProjectListItems */}
      <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <ProjectListItems />
      </Suspense>
    </div>
  );
};
export default ProjectList;
