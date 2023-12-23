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
      <div className="project-detail-window-habing-page-scroll block">
        <img src="img/scroll2.png" width={400} />
        <div className="project-detail-window-habing-page-scroll-content">
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
          <div>&nbsp;1. </div>
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
      <h2>카카오맵 API 활용 위치정보 검색, 저장, 조회</h2>
      <div className="project-detail-window-habing-page-map">
        <div className="block">
          <h3>■ 활용 기술 : 카카오맵 API</h3>
          <div>
            - 주어진 프로젝트 진행 시간을 고려했을 때, 예제로서 키워드 검색
            기능을 제공하는 카카오맵 API를 통해 빠른 학습이 가능하였고, 이를
            통해 <span className="black emphasize">개발 시간 단축</span>이
            가능한 카카오맵 API를 적용
          </div>
        </div>
        <div className="block">
          <h3>■ 구현 내용</h3>
          <div>1. 위치 정보 검색</div>
          <img src="img/map1_1.png" width={960} />
          <div>- 검색창에 입력된 단어를 v-model을 통해 양방향 바인딩</div>
          <div>
            - 검색 버튼 클릭시, 입력된 단어를 바탕으로 카카오맵 API의 검색
            기능을 실행하는 함수 호출
          </div>
        </div>
        <div className="block">
          <div>2. 위치 정보 저장</div>
          <img src="img/map2_1.png" width={960} />
          <div>- 검색 결과로 응답받은 위치 정보 수신</div>
          <div>
            - 주소 정보를 동 단위까지만 표기하기 위해 문자열 파싱 및 출력
          </div>
          <div>
            - 게시글 등록 버튼 눌렀을 때, 동일한 위치 정보가 이미 DB에 저장되어
            있는지 체크
          </div>
          <div>- 등록되어 있지 않으면 DB에 위치 정보 저장</div>
        </div>
        <div className="block">
          <div>3. 위치 정보 조회</div>
          <img src="img/map3_1.png" width={960} />
          <div>- 게시글 조회 시, 해당 게시글 데이터를 DB에서 불러오기</div>
          <div>- 저장된 위치 정보와 카카오맵 API를 통해 위치 정보 출력</div>
        </div>
      </div>
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
      <div className="block">
        <h3>■ 활용 기술 : 웹 스토리지 - 세션 스토리지</h3>
        <div>
          - 페이지 변경 시마다 로그인 여부 체크를 위해 불필요한 서버와의 통신을
          하지 않기 위해 사용
        </div>
        <div>
          - 브라우저가 닫히면 로그인 정보가 사라져야 하므로 로컬 스토리지가 아닌
          세션 스토리지를 이용
        </div>
      </div>
      <div className="block">
        <h3>■ 플로우 차트</h3>
        <img src="img/login1.png" width={960} />
      </div>
      <div className="block">
        <h3>■ 구현 내용</h3>
        <div>1. 로그인</div>
        <div className="project-detail-window-habing-page-content">
          <img src="img/login2.png" width={500} />
          <div>a\■</div>
        </div>
      </div>
      <div className="block">
        <div>2. 로그인 세션 체크</div>
        <div className="project-detail-window-habing-page-content"></div>
      </div>
      <div className="block">
        <div>3. 로그아웃</div>
        <div className="project-detail-window-habing-page-content"></div>
      </div>
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
