import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../store.js";

function Progress() {
  let state = useSelector((state) => state);
  const pages = Array(state.pages).fill(0);
  const pageList = ["Main", "Info", "Projects", "Interests", "Contact"];

  let dispatch = useDispatch();

  return (
    <div className="progress-box">
      {pages.map((val, idx) => (
        <button
          className={`${idx} progress-box-button${
            state.page === idx ? " active" : ""
          }`}
          key={idx}
          onClick={() => {
            dispatch(setPage(idx));
          }}
        >
          <div className="progress-box-title">{pageList[idx]}</div>
        </button>
      ))}
    </div>
  );
}

export default Progress;
