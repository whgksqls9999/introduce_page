import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import projects from "../../../data/ProjectsData";
import ProjectDetailWindowHabing from "./ProjectDetailWindowHabing";

export default function ProjectDetailWindow() {
  let [page, setPage] = useState(0);
  let openedProject = useSelector((state) => state.openedProject);

  const project = projects[openedProject];
  const pages = project.content;

  const lastPage = pages.length - 1;

  const progressBtn = useRef([]);

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
                setPage(idx + 1);
              }}
            >
              {idx + 1}
            </div>
          );
        })}
      </div>
      <div className="project-detail-window-title">{project.title}</div>
      <div className="project-detail-window-content">
        <ProjectDetailWindowHabing page={page} />
      </div>
    </div>
  );
}
