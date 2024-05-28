import React from "react";
import ProjectDetails from "./ProjectDetails";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import { CommentsProvider } from "../../context/comment/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <TasksProvider>
        <CommentsProvider>
        <ProjectDetails />
        <Outlet />
        </CommentsProvider>
      </TasksProvider>
    </>
  );
};

export default ProjectDetailsIndex;
