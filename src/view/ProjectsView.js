import ProjectsList from "../component/projects/ProjectsList";
import ProjectsDetail from "../component/projects/ProjectsDetail";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const ProjectsView = React.memo(() => {
  let isProjectOpen = useSelector((state) => state.isProjectOpen);

  console.log("projects");
  return (
    <>
      <div className="view">
        <div className="border">
          <div className="title">PROJECTS</div>
          <ProjectsList />
          {isProjectOpen ? <ProjectsDetail /> : null}
        </div>
      </div>
    </>
  );
});

export default ProjectsView;
