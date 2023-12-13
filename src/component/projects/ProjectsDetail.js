import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleIsProjectOpen } from "../../store";
import projects from "../../data/ProjectsData";
import ProjectHabing from "./include/ProjectHabing";

export default function ProjectsDetail() {
  let openedProject = useSelector((state) => state.openedProject);
  let dispatch = useDispatch();

  useEffect(() => {
    let project = projects[openedProject];

    // 모달 창 외부 영역 클릭시 닫기
    let outside = document.querySelector(".projects-detail");
    outside.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.className === "projects-detail") {
        doCloseWindow();
      }
    });

    // 모달 창 닫기 버튼 클릭시 닫기
    let closeBtn = document.querySelector(".projects-detail-window-close-btn");
    closeBtn.addEventListener("click", () => {
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
    <div className="projects-detail">
      <div className="projects-detail-window">
        <button className="projects-detail-window-close-btn">닫기</button>
        <ProjectHabing />
      </div>
    </div>
  );
}
