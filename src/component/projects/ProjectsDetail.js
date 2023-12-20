import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { toggleIsProjectOpen } from "../../store";
import projects from "../../data/ProjectsData";
import ProjectDetailWindow from "./include/ProjectDetailWindow";
import React from "react";

const ProjectsDetail = React.memo(() => {
  // function ProjectsDetail() {
  let openedProject = useSelector((state) => state.openedProject);
  let dispatch = useDispatch();
  const outside = useRef();
  const closeBtn = useRef();
  useEffect(() => {
    let project = projects[openedProject];

    // 모달 창 외부 영역 클릭시 닫기
    outside.current.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.className === "projects-detail") {
        doCloseWindow();
      }
    });

    // ESC키 클릭 시 닫기
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        doCloseWindow();
      }
    });

    // 모달 창 닫기 버튼 클릭시 닫기
    closeBtn.current.addEventListener("click", () => {
      doCloseWindow();
    });
  });

  /**
   * Closing project detail window
   */
  function doCloseWindow() {
    dispatch(toggleIsProjectOpen(false));
  }

  return (
    <div className="projects-detail" ref={outside}>
      <div className="projects-detail-window">
        <button className="projects-detail-window-close-btn" ref={closeBtn}>
          닫기
        </button>
        <ProjectDetailWindow />
      </div>
    </div>
  );
});
// );

export default ProjectsDetail;
