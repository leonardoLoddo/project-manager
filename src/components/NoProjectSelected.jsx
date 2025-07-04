import { useContext } from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
import { ProjectContext } from "../store/projects-context";

export default function NoProjectSelected({ onStartAddProject }) {
  const { startAddProject } = useContext(ProjectContext);
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        className="mx-auto w-16 h-16 object-contain"
        src={noProjectImage}
        alt="Una lista vuota"
      />
      <h2 className="my-4 font-bold text-stone-500 text-xl">
        Nessun progetto selezionato
      </h2>
      <p className="mb-4 text-stone-400">
        Seleziona un progetto o inizia con uno nuovo
      </p>
      <p className="mt-8">
        <Button accent onClick={startAddProject}>
          Crea nuovo progetto
        </Button>
      </p>
    </div>
  );
}
