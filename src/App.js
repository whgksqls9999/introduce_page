import "./App.css";
import MainView from "./view/MainView.js";
import InfoView from "./view/InfoView.js";
import ProjectsView from "./view/ProjectsView.js";
import InterestsView from "./view/InterestsView.js";
import ContactView from "./view/ContactView.js";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const containers = document.getElementsByClassName("view");
    const lastPage = containers.length - 1;
    let page = 0;

    // 새로고침시 스크롤 초기화
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

    window.addEventListener("keyup", (e) => {
      doPageCal(e);
      doScrollMove(true);
    });

    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        doPageCal(e);
        doScrollMove(true);
      },
      { passive: false }
    );

    // 윈도우 창 크기 변경 시 현재 페이지 추적해서 출력
    window.addEventListener("resize", () => {
      doScrollMove(false);
    });

    /**
     * 화면에 출력된 페이지를 계산하는 함수
     * @param {Object} e
     */
    function doPageCal(e) {
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
    }

    /**
     * 화면에 출력될 페이지에 맞춰 스크롤을 이동시키는 함수
     * @param {boolean} isSmooth 부드러운 동작 여부
     */
    function doScrollMove(isSmooth) {
      window.scrollTo({
        top: `${page * window.innerHeight}`,
        left: 0,
        behavior: `${isSmooth ? "smooth" : "auto"}`,
      });
    }

    return () => {};
  });

  return (
    <div className="App">
      <MainView />
      <InfoView />
      <ProjectsView />
      <InterestsView />
      <ContactView />
    </div>
  );
}

export default App;
