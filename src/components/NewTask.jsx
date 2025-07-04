import { useState, useContext } from "react";
import { ProjectContext } from "../store/projects-context";

export default function NewTask() {
  const { addTask } = useContext(ProjectContext);
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return; //se la task é vuota non viene inserita
    }
    addTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="bg-stone-200 px-2 py-1 w-64 rounde-sm"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Aggiungi task
      </button>
    </div>
  );
}
