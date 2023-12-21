import "./App.css";
import MainView from "./view/MainView.js";
import InfoView from "./view/InfoView.js";
import ProjectsView from "./view/ProjectsView.js";
import InterestsView from "./view/InterestsView.js";
import ContactView from "./view/ContactView.js";
import Progress from "./component/common/Progress.js";

import React from "react";
import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = React.memo(() => {
  const [page, setPage] = useState(0);
  const main = useRef(null);
  const containers = document.getElementsByClassName("view");
  let lastPage = containers.length - 1;

  let isProjectOpen = useSelector((state) => state.isProjectOpen);

  useEffect(() => {
    // page 값 변화시 스크롤 이동
    if (page < 0) {
      setPage(0);
    } else if (page > lastPage) {
      setPage(lastPage);
    }
    doScrollMove(true);

    // 이벤트 리스너 등록

    // 새로고침 시 스크롤 초기화
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

    // 윈도우 창 크기 변했을 때 페이지 화면에 맞추기
    window.addEventListener("resize", resizeHandle);

    // 방향키 눌러서 페이지 이동
    window.addEventListener("keyup", keyupHandle);

    // 마우스 휠 굴려서 페이지 이동
    window.addEventListener("wheel", wheelHandle, { passive: false });

    // 프로젝트 상세 정보 페이지 오픈시 스크롤 이벤트 제거
    if (isProjectOpen === true) {
      window.removeEventListener("wheel", wheelHandle);
      window.removeEventListener("keyup", keyupHandle);
    }

    return () => {
      // 이벤트 리스너 제거
      window.removeEventListener("resize", resizeHandle);
      window.removeEventListener("wheel", wheelHandle);
      window.removeEventListener("keyup", keyupHandle);
    };
  }, [page, isProjectOpen]);

  function resizeHandle() {
    doScrollMove(false);
  }

  function keyupHandle(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      doPageCal(e);
    }
  }

  function wheelHandle(e) {
    e.preventDefault();
    doPageCal(e);
  }

  /**
   * 이동할 다음 페이지 계산
   * @param {Object} e
   * @param {Number} lastPage
   */
  function doPageCal(e) {
    switch (e.type) {
      case "wheel":
        // setPage((page) => {
        //   if (e.deltaY > 0) {
        //     return page + 1;
        //   } else if (e.deltaY < 0) {
        //     return page - 1;
        //   }
        //   return page;
        // });
        if (e.deltaY > 0) {
          setPage(page + 1);
        } else if (e.deltaY < 0) {
          setPage(page - 1);
        }
        break;
      case "keyup":
        // setPage((page) => {
        //   if (e.key === "ArrowUp") {
        //     return page - 1;
        //   } else if (e.key === "ArrowDown") {
        //     return page + 1;
        //   }
        //   return page;
        // });
        if (e.key === "ArrowUp") {
          setPage(page - 1);
        } else if (e.key === "ArrowDown") {
          setPage(page + 1);
        }
        break;
    }
  }

  /**
   * 계산된 페이지로 스크롤 이동
   * @param {boolean} isSmooth
   */
  function doScrollMove(isSmooth) {
    window.scrollTo({
      top: `${page * window.innerHeight}`,
      left: 0,
      behavior: `${isSmooth ? "smooth" : "auto"}`,
    });
  }

  return (
    <div className="App" ref={main}>
      <Progress page={page} pages={lastPage + 1} setPage={setPage} />
      <MainView />
      <InfoView />
      <ProjectsView />
      {/* <InterestsView /> */}
      <ContactView />
    </div>
  );
});

export default App;
