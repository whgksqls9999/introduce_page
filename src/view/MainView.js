import React from "react";

const MainView = React.memo(() => {
  console.log("main");
  return (
    <div className="view">
      <div className="border">
        <div className="mainview-content">
          <div className="mainview-title">
            <div>FRONTEND</div>
            <div>DEVELOPER</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainView;
