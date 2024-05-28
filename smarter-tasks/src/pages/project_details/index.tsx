import React, { Suspense } from "react";
import ProjectDetails from "./ProjectDetails";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import { CommentsProvider } from "../../context/comment/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <TasksProvider>
        <CommentsProvider>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <ProjectDetails />
            <Outlet />
          </Suspense>
        </CommentsProvider>
      </TasksProvider>
    </>
  );
};

export default ProjectDetailsIndex;
