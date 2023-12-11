import { useSelector, useDispatch } from "react-redux";
import projects from "../../data/ProjectsData";

export default function ProjectsDetail(props) {
  let isProjectOpen = useSelector((state) => state.isProjectOpen);

  let dispatch = useDispatch();
  return (
    <div className="projects-detail">
      <div className="projects-detail-window">{props.project.title}</div>
    </div>
  );
}
