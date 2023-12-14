import projects from "../../../data/ProjectsData";

function ProjectDetailWindowHabing() {
  let project = projects[0];
  return (
    <div className="project-detail-window-habing">
      <div className="project-detail-window-habing-page">
        <div className="project-detail-window-habing-outline">
          <div>개요 : {project.outline}</div>
          <div>개발 기간 : {project.period}</div>
          <div>개발 인원 : {project.headCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailWindowHabing;
