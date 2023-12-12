import ProjectsList from "../component/projects/ProjectsList";
import ProjectsDetail from "../component/projects/ProjectsDetail";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsProjectOpen } from "../store";
import React from "react";
import projects from "../data/ProjectsData";
import { useEffect } from "react";

const ProjectsView = React.memo(() => {
  let isProjectOpen = useSelector((state) => state.isProjectOpen);
  let openedProject = useSelector((state) => state.openedProject);

  let dispatch = useDispatch();

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
