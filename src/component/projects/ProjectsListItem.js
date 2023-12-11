import { useDispatch } from "react-redux";

export default function ProjectsListItem(props) {
  let dispatch = useDispatch();
  return (
    <div className="projects-list-item">
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
          <div>개발 기간 :{props.project.period}</div>
          <div>개발 인원 :{props.project.headCount}</div>
        </div>
      </div>
    </div>
  );
}
