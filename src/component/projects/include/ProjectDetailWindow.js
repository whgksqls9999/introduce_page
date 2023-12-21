import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import projects from "../../../data/ProjectsData";
import ProjectDetailWindowHabing from "./ProjectDetailWindowHabing";
import React from "react";

const ProjectDetailWindow = React.memo(() => {
  let [page, setPage] = useState(0);
  let openedProject = useSelector((state) => state.openedProject);

  const project = projects[openedProject];
  const pages = project.content;
  const lastPage = pages.length - 1;
  const progressBtn = useRef([]);
  const contentWindow = useRef(null);

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
      <div className="project-detail-window-progress">
        {pages.map((element, idx) => {
          return (
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
          );
        })}
      </div>
      <div className="project-detail-window-title">
        {project.title}{" "}
        <a href={project.github} target="_blank" className="project-link">
          깃허브
        </a>
      </div>
      <div className="project-detail-window-content" ref={contentWindow}>
        {openedProject == 0 ? (
          <ProjectDetailWindowHabing
            page={page}
            makeScrollable={makeScrollable}
            makeNonScrollable={makeNonScrollable}
            initScroll={initScroll}
          />
        ) : null}
      </div>
    </div>
  );
});
// });

export default ProjectDetailWindow;
