import { useEffect, useRef } from "react";
import projects from "../../../data/ProjectsData";
import React from "react";

const ProjectDetailWindowIntroduce = React.memo((props) => {
  let project = projects[0];
  let curPage = props.page;

  const page = useRef(null);

  const makeScrollable = props.makeScrollable;
  const makeNonScrollable = props.makeNonScrollable;
  const initScroll = props.initScroll;

  let content;
  switch (curPage) {
    case 0:
      content = <Abcd />;
      break;
    case 1:
      // content = <div>ㄴㅇㄹㄴㅇ</div>;
      break;
  }
  return <>{content}</>;
});

function Abcd() {
  let a = 0;
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "100px",
        marginTop: "200px",
        height: "150px",
      }}
    >
      &nbsp; 진 행 중
    </div>
  );
}

export default ProjectDetailWindowIntroduce;
