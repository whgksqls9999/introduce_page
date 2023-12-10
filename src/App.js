import "./App.css";
import MainView from "./view/MainView.js";
import InfoView from "./view/InfoView.js";
import ProjectsView from "./view/ProjectsView.js";
import InterestsView from "./view/InterestsView.js";
import ContactView from "./view/ContactView.js";
import Progress from "./component/common/Progress.js";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "./store.js";
import { setPages } from "./store.js";

function App() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let page = 0;

  useEffect(() => {
    const containers = document.getElementsByClassName("view");
    const lastPage = containers.length - 1;
    dispatch(setPages(containers.length));

    // 새로고침시 스크롤 초기화
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

    // 윈도우 창 크기 변했을 때 페이지 화면에 맞추기
    window.addEventListener("resize", () => {
      doScrollMove(false);
    });

    // 방향키 눌러서 페이지 이동
    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        doPageCal(e, lastPage);
      }
    });

    // 마우스 휠 굴려서 페이지 이동
    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        doPageCal(e, lastPage);
      },
      { passive: false }
    );
  });

  useEffect(() => {
    page = state.page;
    doScrollMove(true);
  }, [state.page]);

  /**
   * 이동할 다음 페이지 계산
   * @param {Object} e
   * @param {Number} lastPage
   */
  function doPageCal(e, lastPage) {
    switch (e.type) {
      case "wheel":
        if (e.deltaY > 0) {
          page++;
        } else if (e.deltaY < 0) {
          page--;
        }
        break;
      case "keyup":
        if (e.key === "ArrowUp") {
          page--;
        } else if (e.key === "ArrowDown") {
          page++;
        }
        break;
    }

    if (page < 0) {
      page = 0;
    } else if (page > lastPage) {
      page = lastPage;
    }
    dispatch(setPage(page));
  }

  /**
   * 계산된 페이지로 스크롤 이동
   * @param {boolean} isSmooth
   */
  function doScrollMove(isSmooth) {
    window.scrollTo({
      top: `${state.page * window.innerHeight}`,
      left: 0,
      behavior: `${isSmooth ? "smooth" : "auto"}`,
    });
  }

  return (
    <div className="App">
      <Progress />
      <MainView />
      <InfoView />
      <ProjectsView />
      <InterestsView />
      <ContactView />
    </div>
  );
}

export default App;
