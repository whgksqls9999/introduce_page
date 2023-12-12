import InfoProfile from "../component/info/InfoProfile";
import InfoDetailTab from "../component/info/InfoDetailTab";
import React from "react";

const InfoView = React.memo(() => {
  console.log("info");
  return (
    <div className="view">
      <div className="border">
        <div className="title">INFO</div>
        <InfoProfile />
        <InfoDetailTab />
      </div>
    </div>
  );
});

export default InfoView;
