import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50">
      <h2 className="mb-8 font-bold text-stone-200 md:text-xl uppercase">
        I tuoi Progetti
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Nuovo progetto</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="hover:bg-stone-800 my-1 px-2 py-1 rounded-sm w-full text-stone-400 hover:text-stone-200 text-left">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
