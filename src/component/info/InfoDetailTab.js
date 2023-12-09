import "../../App.css";
import { useEffect, useState } from "react";
import InfoDetailContent from "./InfoDetailContent";

export default function InfoDetailTab() {
  let [selected, setSelected] = useState(0);
  let buttons = [];

  useEffect(() => {
    buttons = document.querySelectorAll(".info-detail-tab-button");
    buttons.forEach((element, i) =>
      element.addEventListener("click", () => {
        setSelected(i);
        for (let j = 0; j < buttons.length; ++j) {
          if (j === i) {
            buttons[j].classList.add("selected-tab");
          } else {
            buttons[j].classList.remove("selected-tab");
          }
        }
      })
    );
  }, []);

  return (
    <>
      <div className="info-detail-tab">
        <div className="info-detail-tab-button selected-tab">SKILLS</div>
        <div className="info-detail-tab-button ">EDUCATION</div>
        <div className="info-detail-tab-button ">INTRODUCE</div>
      </div>
      <InfoDetailContent selectedTab={selected} />
    </>
  );
}
