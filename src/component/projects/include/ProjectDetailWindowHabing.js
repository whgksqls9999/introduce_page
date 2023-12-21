import { useEffect, useRef } from "react";
import projects from "../../../data/ProjectsData";
import React from "react";

const ProjectDetailWindowHabing = React.memo((props) => {
  let project = projects[0];
  let curPage = props.page;

  const content = useRef(null);
  const page = useRef(null);

  const makeScrollable = props.makeScrollable;
  const makeNonScrollable = props.makeNonScrollable;

  return (
    <>
      {curPage === 0 ? (
        <ProjectDetailWindowHabingPage1
          page={page}
          project={project}
          makeNonScrollable={makeNonScrollable}
        />
      ) : null}
      {curPage === 1 ? (
        <ProjectDetailWindowHabingPage2
          page={page}
          makeScrollable={makeScrollable}
        />
      ) : null}
      {curPage === 2 ? (
        <ProjectDetailWindowHabingPage3
          page={page}
          makeScrollable={makeScrollable}
        />
      ) : null}
      {curPage === 3 ? (
        <ProjectDetailWindowHabingPage4
          page={page}
          makeScrollable={makeScrollable}
        />
      ) : null}
      {curPage === 4 ? (
        <ProjectDetailWindowHabingPage5
          page={page}
          makeScrollable={makeScrollable}
        />
      ) : null}
      {curPage === 5 ? (
        <ProjectDetailWindowHabingPage6
          page={page}
          makeNonScrollable={makeNonScrollable}
        />
      ) : null}
    </>
  );
});

function ProjectDetailWindowHabingPage1(props) {
  let page = props.page;
  let project = props.project;

  const makeNonScrollable = props.makeNonScrollable;

  useEffect(() => {
    makeNonScrollable();
  }, []);

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
            <div className="div30">■ 개발 환경</div>
            <div className="div30">
              Visual Studio Code | Spring | GIT | GITHUB
            </div>
          </li>
          <li>
            <div className="div30">■ 개발</div>
            <div className="div30">
              HTML5 | CSS3 | javascript | Vue.js | MySQL
            </div>
          </li>
          <li>
            <div className="div30">■ 커뮤니케이션</div>
            <div className="div30">MATTERMOST | NOTION | FIGMA</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProjectDetailWindowHabingPage2(props) {
  let page = props.page;
  const makeScrollable = props.makeScrollable;

  useEffect(() => {
    makeScrollable();
  }, []);
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>스크롤 애니메이션</h2>
    </div>
  );
}

function ProjectDetailWindowHabingPage3(props) {
  let page = props.page;
  const makeScrollable = props.makeScrollable;

  useEffect(() => {
    makeScrollable();
  }, []);
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>카카오맵 API 활용 위치정보 </h2>
    </div>
  );
}
function ProjectDetailWindowHabingPage4(props) {
  let page = props.page;
  const makeScrollable = props.makeScrollable;

  useEffect(() => {
    makeScrollable();
  }, []);
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>로그인/로그아웃</h2>
    </div>
  );
}

function ProjectDetailWindowHabingPage5(props) {
  let page = props.page;
  const makeScrollable = props.makeScrollable;

  useEffect(() => {
    makeScrollable();
  }, []);
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>게시글, 장소 좋아요 / 유저간 팔로잉</h2>
    </div>
  );
}

function ProjectDetailWindowHabingPage6(props) {
  let page = props.page;
  const makeNonScrollable = props.makeNonScrollable;

  useEffect(() => {
    makeNonScrollable();
  }, []);
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>정리</h2>
    </div>
  );
}

export default ProjectDetailWindowHabing;
