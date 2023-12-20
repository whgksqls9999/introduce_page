import ProjectsListItem from "./ProjectsListItem";
import projects from "../../data/ProjectsData";

import { useEffect, useState } from "react";
import React from "react";

const ProjectsList = React.memo(() => {
  {
    let [pages, setPages] = useState(Math.ceil(projects.length / 2));
    let [curPage, setCurPage] = useState(1);
    let pagenation = Array(pages).fill(0);

    function doPageChange(page) {
      setCurPage(page);
    }

    return (
      <div className="projects-list">
        <div className="projects-list-content">
          {projects.map((project, idx) => {
            if (idx === 2 * curPage - 1 || idx === 2 * curPage - 1 - 1) {
              return <ProjectsListItem project={project} key={idx} />;
            }
          })}
        </div>
        <div className="projects-list-pages">
          {pagenation.map((element, idx) => {
            return (
              <button
                onClick={() => {
                  doPageChange(idx + 1);
                }}
                key={idx}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
});

export default ProjectsList;
