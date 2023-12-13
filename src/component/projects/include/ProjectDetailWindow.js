import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import projects from "../../../data/ProjectsData";

export default function ProjectDetailWindow() {
  let [page, setPage] = useState(0);
  let openedProject = useSelector((state) => state.openedProject);
  const project = projects[openedProject];
  const pages = project.content;

  const lastPage = pages.length - 1;
  const info = useRef();
  const content = useRef();

  useEffect(() => {
    content.current = document.querySelector(".project-detail-window-content");

    info.current = document.querySelector(
      ".project-detail-window-content-info"
    );
  }, []);

  useEffect(() => {
    content.current.scrollTo({
      top: info.offsetHeight * page,
      left: 0,
    });
  }, [page]);

  return (
    <div className="project-detail-window">
      <div className="project-detail-window-progress">
        {pages.map((element, idx) => {
          return (
            <button
              className="project-detail-window-progress-btn"
              key={idx}
            ></button>
          );
        })}
      </div>
      <div className="project-detail-window-title">{project.title}</div>
      <div className="project-detail-window-content">
        {project.content.map((element) => {
          return (
            <div className="project-detail-window-content-info" key={element}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
