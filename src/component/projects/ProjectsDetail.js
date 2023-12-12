import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import projects from "../../data/ProjectsData";
import { toggleIsProjectOpen } from "../../store";

export default function ProjectsDetail() {
  let openedProject = useSelector((state) => state.openedProject);
  let dispatch = useDispatch();

  useEffect(() => {
    let project = projects[openedProject];
    let outside = document.querySelector(".projects-detail");
    outside.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.className === "projects-detail") {
        dispatch(toggleIsProjectOpen(false));
      }
    });
  });

  return (
    <div className="projects-detail">
      <div className="projects-detail-window"></div>
    </div>
  );
}
