import { useEffect, useRef } from "react";

import projects from "../../../data/ProjectsData";
import { connect } from "react-redux";

function ProjectDetailWindowHabing(props) {
  let project = projects[0];
  let curPage = props.page;

  const content = useRef(null);
  const page = useRef(null);

  useEffect(() => {
    console.log(
      (content.current.style.marginTop = `${
        -(curPage - 1) * page.current.offsetHeight
      }px`)
    );
  }, [curPage]);

  return (
    <div className="project-detail-window-habing" ref={content}>
      <div className="project-detail-window-habing-page" ref={page}>
        <div className="project-detail-window-habing-outline">
          <div>개요 : {project.outline}</div>
          <div>개발 기간 : {project.period}</div>
          <div>개발 인원 : {project.headCount}</div>
        </div>
      </div>
      <div className="project-detail-window-habing-page" ref={page}>
        <div className="project-detail-window-habing-outline">
          <div>두번째 페이지</div>
          <div>개발 asd : {project.period}</div>
          <div>개발 asd : {project.headCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailWindowHabing;
