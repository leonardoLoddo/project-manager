export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="mt-16 w-[35rem]">
      <header className="mb-4 pb-4 border-stone-300 border-b-2">
        <div className="flex justify-between items-center">
          <h1 className="mb-2 font-bold text-stone-600 text-3xl">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      TASKS
    </div>
  );
}
