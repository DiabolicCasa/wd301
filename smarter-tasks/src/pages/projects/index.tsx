import ErrorBoundary from "../../components/ErrorBoundary";
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
import { Suspense } from "react";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Projects;
