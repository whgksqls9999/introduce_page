import ProjectsList from "../component/projects/ProjectsList";
import ProjectsDetail from "../component/projects/ProjectsDetail";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsProjectOpen } from "../store";

function ProjectsView() {
  let isProjectOpen = useSelector((state) => state.isProjectOpen);

  let dispatch = useDispatch();
  return (
    <>
      <div className="view">
        <div className="border">
          <div className="title">PROJECTS</div>
          <ProjectsList />
          {isProjectOpen ? <ProjectsDetail /> : null}
        </div>
      </div>
    </>
  );
}

export default ProjectsView;
