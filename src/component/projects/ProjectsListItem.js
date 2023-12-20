import { useDispatch, useSelector } from "react-redux";
import { setOpenedProject, toggleIsProjectOpen } from "../../store";

import React from "react";

const ProjectsListItem = React.memo((props) => {
  {
    let dispatch = useDispatch();
    let openedProject = useSelector((state) => state.openedProject);
    let isProjectOpen = useSelector((state) => state.isProjectOpen);

    return (
      <div
        className="projects-list-item"
        onClick={() => {
          dispatch(toggleIsProjectOpen(true));
          dispatch(setOpenedProject(props.project.id));
        }}
      >
        <div className="projects-list-item-hover"></div>
        <div className="projects-list-item-thumbnail">
          <img src={props.project.img} alt="프로젝트 썸네일" width={250}></img>
        </div>
        <div className="projects-list-item-content">
          <div className="projects-list-item-content-title">
            {props.project.title}
          </div>
          <div className="projects-list-item-content-detail">
            <div>개요 : {props.project.outline}</div>
            <div>개발 기간 : {props.project.period}</div>
            <div>개발 인원 : {props.project.headCount}</div>
          </div>
        </div>
      </div>
    );
  }
});

export default ProjectsListItem;
