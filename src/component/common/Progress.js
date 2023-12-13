import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../store.js";
import React from "react";
const Progress = React.memo((props) => {
  const pages = Array(props.pages).fill(0);
  // const pageList = ["Main", "Info", "Projects", "Interests", "Contact"];
  const pageList = ["Main", "Info", "Projects", "Contact"];

  let [page, setPage] = [props.page, props.setPage];

  return (
    <div className="progress-box">
      {pages.map((val, idx) => (
        <button
          className={`${idx} progress-box-button${
            page === idx ? " active" : ""
          }`}
          key={idx}
          onClick={() => {
            setPage(idx);
          }}
        >
          <div className="progress-box-title">{pageList[idx]}</div>
        </button>
      ))}
    </div>
  );
});

export default Progress;
