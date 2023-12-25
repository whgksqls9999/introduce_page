import { useEffect, useRef } from "react";
import projects from "../../../data/ProjectsData";
import React from "react";

const ProjectDetailWindowHabing = React.memo((props) => {
  let project = projects[0];
  let curPage = props.page;

  const page = useRef(null);

  const makeScrollable = props.makeScrollable;
  const makeNonScrollable = props.makeNonScrollable;
  const initScroll = props.initScroll;

  let content;
  switch (curPage) {
    case 0:
      content = (
        <ProjectDetailWindowHabingPage1
          page={page}
          project={project}
          makeNonScrollable={makeNonScrollable}
          initScroll={initScroll}
        />
      );
      break;
    case 1:
      content = (
        <ProjectDetailWindowHabingPage2
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
        />
      );
      break;
    case 2:
      content = (
        <ProjectDetailWindowHabingPage3
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
        />
      );
      break;
    case 3:
      content = (
        <ProjectDetailWindowHabingPage4
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
        />
      );
      break;
    case 4:
      content = (
        <ProjectDetailWindowHabingPage5
          page={page}
          makeScrollable={makeScrollable}
          initScroll={initScroll}
        />
      );
      break;
    case 5:
      content = (
        <ProjectDetailWindowHabingPage6
          page={page}
          makeNonScrollable={makeNonScrollable}
        />
      );
      break;
  }

  return <>{content}</>;
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
          <div className="block">
            <h3>■ 동작 화면</h3>
            <img src="img/" width={540} />
          </div>
          <div className="block">
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
              이 이점으로 다가와 적용하기로 결정
            </div>
          </div>
          <div className="block">
            <h3>■ 구현 내용</h3>
            <div>1. gsap 라이브러리 활용을 위해 html 요소에 클래스 지정</div>
            <img src="img/scroll4.png" width={400} />
            <div>2. 각 요소들의 초기 상태를 CSS로 지정</div>
            <img src="img/scroll5.png" width={400} />
            <div>3. gsap.to() 메서드를 사용해 최종 상태 지정</div>
            <img src="img/scroll6.png" width={400} />
          </div>
          {/* <div className="block">
            <h3>■ 고찰</h3>
            <div>1. </div>
          </div> */}
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
            - 주어진 프로젝트 진행 시간을 고려했을 때, 공식적으로 키워드 검색
            기능 예제를 제공하고 있는 카카오맵 API를 통해 빠른 학습이
            가능하였고, <span className="black emphasize">개발 시간 단축</span>
            에 도움이 될 것이라 생각해 적용
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
        <h3>■ 활용 기술 : 세션 스토리지</h3>
        <div>1. 세션 스토리지</div>
        <div>
          - 페이지 변경 시마다 로그인 여부 체크를 위해 불필요한 서버와의 통신을
          하지 않기 위해 사용
        </div>
        <div>
          - 브라우저가 닫히면 로그인 정보가 사라져야 하므로 로컬 스토리지가 아닌
          세션 스토리지를 이용
        </div>
        {/* <div>2. JWT(Json Web Token)</div>
        <div>- 로그인 시 보다 명확한 인증 기능 확보를 위해 사용</div>
        <div>3. axios</div> */}
        <div></div>
      </div>
      <div className="block">
        <h3>■ 플로우 차트</h3>
        <img src="img/login1.png" width={960} />
      </div>
      <div className="block">
        <h3>■ 구현 내용</h3>
        <div>1. 로그인</div>
        {/* <div className="project-detail-window-habing-page-content"> */}
        {/* </div> */}
        <div className="block">
          <img src="img/login2.png" width={700} />
          <div>- axios를 활용한 login post 요청</div>
          <div>- 요청 결과에 따라 상이한 작업 진행</div>
        </div>
        <div className="block">
          <img src="img/login3.png" width={700} />
          <div>
            - 요청을 받아 DB 내 유저 데이터와 대조하여 ID, PW 유효성 검사
          </div>
          <div>- 유효하지 않은 사용자 : 토큰을 생성하지 않고 null 반환</div>
          <div>
            - 유효한 사용자 : 토큰에 아이디 정보를 담아 생성 후 토큰 반환
          </div>
        </div>
        <div className="block">
          <img src="img/login4.png" width={700} />
          <div>
            - 유효한 사용자의 경우, 유저의 아이디 정보와 함께 SALT로 특정
            문자열을 추가해 토큰 생성
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block">
          <div>2. 로그인 세션 체크</div>
          <img src="img/login5.png" width={700} />
          <div>- 컴포넌트 마운트 시, store에 작성된 로그인 체크 함수 호출</div>
          <div>
            - 로그인 체크 함수 : 세션 스토리지에 저장된 토큰 정보에서 유저
            정보를 가져와 반환
          </div>
        </div>
      </div>
      <div className="block">
        <div>3. 로그아웃</div>
        <img src="img/login6.png" width={700} />
        <div>- 세션 스토리지에 저장된 토큰 정보 제거</div>
        <div>- store에 저장된 loginUser 정보 제거</div>
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
      <div className="block">
        <h3>■ 구현 내용</h3>
        <img src="img/favor1.png" width={960} />
        {/* <img src="img/favor2.png" width={700} /> */}
        <img src="img/favor3.png" width={960} />
        <div>
          - 좋아요, 팔로잉 전/후 버튼을 각각 디자인한 후 조건부 렌더링을 통해
          화면에 출력
        </div>
        <div>
          - DB 테이블에 게시글 좋아요, 장소 찜하기 및 유저 팔로잉 정보 저장
        </div>
      </div>
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
