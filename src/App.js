import "./App.css";
import MainView from "./view/MainView.js";
import InfoView from "./view/InfoView.js";
import ProjectsView from "./view/ProjectsView.js";
import InterestsView from "./view/InterestsView.js";
import ContactView from "./view/ContactView.js";
import Progress from "./component/common/Progress.js";

import { useEffect, useMemo } from "react";
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

    window.addEventListener("resize", () => {
      doScrollMove(false);
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        doPageCal(e, lastPage);
      }
    });

    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        doPageCal(e, lastPage);
      },
      { passive: false }
    );

    /**
     * 화면에 출력된 페이지를 계산하는 함수
     * @param {Object} e
     */
  }, []);

  useEffect(() => {
    page = state.page;
    doScrollMove(true);
    console.log(page, state.page);
  }, [state.page]);

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
        if (e.key == "ArrowUp") {
          page--;
        } else if (e.key == "ArrowDown") {
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
   * 화면에 출력될 페이지에 맞춰 스크롤을 이동시키는 함수
   */
  function doScrollMove(isSmooth) {
    window.scrollTo({
      top: `${page * window.innerHeight}`,
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
