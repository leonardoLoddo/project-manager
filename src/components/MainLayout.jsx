import { useContext } from "react";
import { ProjectContext } from "../store/projects-context";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectsSidebar from "./ProjectsSidebar";
import SelectedProject from "./SelectedProject";

export default function MainLayout() {
  const { projects } = useContext(ProjectContext);

  const selectedProject = projects.projects.find(
    (project) => project.id === projects.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projects.tasks.filter(
        (task) => task.projectId === projects.selectedProjectId
      )}
    />
  );

  if (projects.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
    <main className="flex gap-8 my-[5vh] min-h-[90vh]">
      <ProjectsSidebar selectedProjectId={projects.selectedProjectId} />
      {content}
    </main>
  );
}
