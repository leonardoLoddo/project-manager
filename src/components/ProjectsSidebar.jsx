import { useContext } from "react";
import Button from "./Button";
import { ProjectContext } from "../store/projects-context";

export default function ProjectsSidebar({ selectedProjectId }) {
  const { projects, selectProject, startAddProject } =
    useContext(ProjectContext);

  return (
    <aside className="bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50">
      <h2 className="mb-8 font-bold text-stone-200 md:text-xl uppercase">
        I tuoi Progetti
      </h2>
      <div>
        <Button onClick={startAddProject}>+ Nuovo progetto</Button>
      </div>
      <ul className="mt-8">
        {projects.projects.map((project) => {
          let classes =
            "hover:bg-stone-800 my-1 px-2 py-1 rounded-sm w-full  hover:text-stone-200 text-left";
          if (project.id === selectedProjectId) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => selectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
