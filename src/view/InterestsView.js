import React from "react";

const InterestsView = React.memo(() => {
  console.log("interests");
  return (
    <div className="view">
      <div className="border">
        <div className="title">INTERESTS</div>
      </div>
    </div>
  );
});

export default InterestsView;
