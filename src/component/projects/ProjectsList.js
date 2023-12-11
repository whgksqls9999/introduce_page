import ProjectsListItem from "./ProjectsListItem";

export default function ProjectsList() {
  return (
    <div className="projects-list">
      <div className="projects-list-content">
        <ProjectsListItem />
        <ProjectsListItem />
      </div>
      <div className="projects-list-pages"></div>
    </div>
  );
}
