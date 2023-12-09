import "../../App.css";
import { useEffect, useState } from "react";
import InfoDetailContent from "./InfoDetailContent";

export default function InfoDetailTab() {
  let buttons = document.querySelectorAll(".info-detail-tab-button");
  let [selected, setSelected] = useState(0);

  useEffect(() => {
    buttons.forEach((element) => element.classList.toggle("selected-tab"));
    buttons.forEach((element, i) =>
      element.addEventListener("click", () => {
        setSelected(i);
      })
    );
  }, [selected]);

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
