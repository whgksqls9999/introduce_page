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
  const initScroll = props.initScroll;

  return (
    <>
      {curPage === 0 ? (
        <ProjectDetailWindowHabingPage1
          page={page}
          project={project}
          makeNonScrollable={makeNonScrollable}
          initScroll={initScroll}
        />
      ) : null}
      {curPage === 1 ? (
        <ProjectDetailWindowHabingPage2
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
        />
      ) : null}
      {curPage === 2 ? (
        <ProjectDetailWindowHabingPage3
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
        />
      ) : null}
      {curPage === 3 ? (
        <ProjectDetailWindowHabingPage4
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
        />
      ) : null}
      {curPage === 4 ? (
        <ProjectDetailWindowHabingPage5
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
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
  const initScroll = props.initScroll;

  useEffect(() => {
    makeNonScrollable();
    initScroll();
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
  const initScroll = props.initScroll;

  useEffect(() => {
    makeScrollable();
    initScroll();
  }, []);
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>스크롤 애니메이션</h2>
      <div className="project-detail-window-habing-page-scroll-1">
        <img src="img/scroll2.png" width={400} />
        <div className="project-detail-window-habing-page-scroll-1-content">
          <h3>■ 동작 화면</h3>
          <img src="img/" width={540} />
          <h3>■ 활용 기술 : gsap 라이브러리</h3>
          <div>
            - html요소에 적용된 클래스명을 토대로 초기, 최종 상태를 지정해주는
            방식으로 애니메이션 적용
          </div>
          <div>
            - 주어진 프로젝트 진행 시간을 고려했을 때, 보다{" "}
            <span className="black emphasize">
              손쉽게 애니메이션을 적용시킬 수 있는 점
            </span>
            이 이점으로 다가와 적용하기로 결정&nbsp;
          </div>
          <h3>■ 구현 내용</h3>
          <div>
            &nbsp;1. gsap 라이브러리 활용을 위해 html 요소에 클래스 지정
          </div>
          <img src="img/scroll4.png" width={400} />
          <div>&nbsp;2. 각 요소들의 초기 상태를 CSS로 지정</div>
          <img src="img/scroll5.png" width={400} />
          <div>&nbsp;3. gsap.to() 메서드를 사용해 최종 상태 지정</div>
          <img src="img/scroll6.png" width={400} />
          <h3>■ 고찰</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailWindowHabingPage3(props) {
  let page = props.page;
  const makeScrollable = props.makeScrollable;
  const initScroll = props.initScroll;

  useEffect(() => {
    makeScrollable();
    initScroll();
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
  const initScroll = props.initScroll;
  useEffect(() => {
    makeScrollable();
    initScroll();
  }, []);
  return (
    <div className="project-detail-window-habing-page" ref={page}>
      <h2>로그인 / 로그아웃</h2>
    </div>
  );
}

function ProjectDetailWindowHabingPage5(props) {
  let page = props.page;
  const makeScrollable = props.makeScrollable;
  const initScroll = props.initScroll;
  useEffect(() => {
    makeScrollable();
    initScroll();
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
      <h2>정 리</h2>
    </div>
  );
}

export default ProjectDetailWindowHabing;
