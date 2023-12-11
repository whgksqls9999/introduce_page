import ProjectsList from "../component/projects/ProjectsList";

function ProjectsView() {
  return (
    <div className="view">
      <div className="border">
        <div className="title">PROJECTS</div>
        <ProjectsList />
      </div>
    </div>
  );
}

export default ProjectsView;
