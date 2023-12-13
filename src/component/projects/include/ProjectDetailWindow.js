import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import projects from "../../../data/ProjectsData";

export default function ProjectDetailWindow() {
  let [page, setPage] = useState(0);
  let openedProject = useSelector((state) => state.openedProject);
  let pages = projects[openedProject].content;
  const lastPage = useRef();
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
      <div className="project-detail-window-title">HABING</div>
      <div className="project-detail-window-content">
        {projects[0].content.map((element) => {
          return (
            <div className="project-detail-window-content-info" key={element}>
              {element}
            </div>
          );
        })}
        {/* <div className="project-detail-window-content-info">1</div>
        <div className="project-detail-window-content-info">2</div>
        <div className="project-detail-window-content-info">3</div> */}
      </div>
    </div>
  );
}
