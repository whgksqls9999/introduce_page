import { useEffect, useRef } from "react";
import projects from "../../../data/ProjectsData";
import React from "react";

const ProjectDetailWindowHabing = React.memo((props) => {
  // function ProjectDetailWindowHabing(props) {
  let project = projects[0];
  let curPage = props.page;

  const content = useRef(null);
  const page = useRef(null);

  useEffect(() => {
    // content.current.style.marginTop = `${
    //   -curPage * page.current.offsetHeight
    // }px`;
  }, [curPage]);

  return (
    <>
      {curPage === 0 ? (
        <ProjectDetailWindowHabingPage1 page={page} project={project} />
      ) : null}
      {curPage === 1 ? <ProjectDetailWindowHabingPage2 page={page} /> : null}
    </>
  );
});

function ProjectDetailWindowHabingPage1(props) {
  let page = props.page;
  let project = props.project;

  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <div className="project-detail-window-habing-outline">
        <div>개요 : {project.outline}</div>
        <div>개발 기간 : {project.period}</div>
        <div>개발 인원 : {project.headCount}</div>
        <div className="project-detail-window-habing-outline-role">
          <div>담당 역할 : </div>
          <div className="project-detail-window-habing-outline-role-content">
            {project.role.map((element, idx) => {
              return (
                <div key={idx}>
                  &nbsp;{idx + 1}. {element}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="project-detail-window-habing-content">
        <ul>
          <li>
            <div>■ 개발 환경</div>
            <div>Visual Studio Code | Spring | GIT | GITHUB</div>
          </li>
          <li>
            <div>■ 개발</div>
            <div>HTML5 | CSS3 | javascript | Vue.js | MySQL</div>
          </li>
          <li>
            <div>■ 커뮤니케이션</div>
            <div>MATTERMOST | NOTION | FIGMA</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProjectDetailWindowHabingPage2(props) {
  let page = props.page;
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>스크롤 애니메이션</h2>
    </div>
  );
}

export default ProjectDetailWindowHabing;
