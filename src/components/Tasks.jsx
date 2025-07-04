import NewTask from "./NewTask";
import { useContext } from "react";
import { ProjectContext } from "../store/projects-context";

export default function Tasks({ tasks }) {
  const { deleteTask } = useContext(ProjectContext);
  return (
    <section>
      <h2 className="mb-4 font-bold text-2-xl text-stone-700">Tasks</h2>
      <NewTask />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          Questo progetto non ha ancora task.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="bg-stone-100 mt-8 p-4 rounded-md">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
