import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import projects from "../../../data/ProjectsData";
import ProjectDetailWindowHabing from "./ProjectDetailWindowHabing";
import React from "react";
import ProjectDetailWindowIntroduce from "./ProjectDetailWindowIntroduce";

const ProjectDetailWindow = React.memo(() => {
  let [page, setPage] = useState(0);
  let openedProject = useSelector((state) => state.openedProject);

  const project = projects[openedProject];
  const pages = project.content;
  const progressBtn = useRef([]);
  const contentWindow = useRef(null);

  const buttons = pages.map((element, idx) => (
    <div
      className="project-detail-window-progress-btn"
      key={idx}
      ref={(element) => (progressBtn.current[idx] = element)}
      onMouseUp={() => {
        setPage(idx);
      }}
    >
      {idx + 1}
    </div>
  ));

  let selectedProject;
  switch (openedProject) {
    case 0:
      selectedProject = (
        <ProjectDetailWindowHabing
          page={page}
          makeScrollable={makeScrollable}
          makeNonScrollable={makeNonScrollable}
          initScroll={initScroll}
        />
      );
      break;
    case 1:
      selectedProject = (
        <ProjectDetailWindowIntroduce
          page={page}
          makeScrollable={makeScrollable}
          makeNonScrollable={makeNonScrollable}
          initScroll={initScroll}
        />
      );
  }

  function makeScrollable() {
    contentWindow.current.classList.add("scrollable");
  }

  function makeNonScrollable() {
    contentWindow.current.classList.remove("scrollable");
  }

  function initScroll() {
    contentWindow.current.scrollTo(0, 0);
  }

  return (
    <div className="project-detail-window">
      <div className="project-detail-window-progress">{buttons}</div>
      <div className="project-detail-window-title">
        {project.title}{" "}
        <a href={project.github} target="_blank" className="project-link">
          깃허브
        </a>
      </div>
      <div className="project-detail-window-content" ref={contentWindow}>
        {selectedProject}
      </div>
    </div>
  );
});

export default ProjectDetailWindow;
